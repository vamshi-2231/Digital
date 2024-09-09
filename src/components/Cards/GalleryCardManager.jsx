import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import GalleryInputCard from "./GalleryInputCard";
import GalleryCard from "./GalleryCard"; // Ensure you have a GalleryCard component

const GalleryCardManager = ({ isLoading, setIsLoading, onMessage }) => {
  const [galleryCards, setGalleryCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [newAlbumImages, setNewAlbumImages] = useState([]);

  useEffect(() => {
    fetchGalleryCards();
  }, []);

  const fetchGalleryCards = async () => {
    setIsLoading(true);
    try {
      const galleryRef = collection(db, "gallery");
      const data = await getDocs(galleryRef);
      const cards = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setGalleryCards(cards);
    } catch (err) {
      onMessage("Error fetching gallery cards.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImages = async (images, type, id) => {
    const imageUrls = [];
    for (const image of images) {
      const imageRef = ref(storage, `${type}Images/${id}_${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      imageUrls.push(imageUrl);
    }
    return imageUrls;
  };

  const handleCreate = async (newCard, files) => {
    setIsLoading(true);
    try {
      let coverImageUrl = null;
      const albumImageUrls = [];

      if (files.coverPhoto) {
        console.log("Uploading cover photo...");
        const coverImageUrls = await uploadImages([files.coverPhoto], "gallery", Date.now());
        coverImageUrl = coverImageUrls[0];
        console.log("Cover photo URL:", coverImageUrl);
      }

      if (files.albumPhotos.length > 0) {
        console.log("Uploading album photos...");
        const albumImageUrlsArray = await uploadImages(files.albumPhotos, "gallery", Date.now());
        albumImageUrls.push(...albumImageUrlsArray);
        console.log("Album photos URLs:", albumImageUrls);
      }

      // Ensure all required fields are provided
      await addDoc(collection(db, "gallery"), {
        title: newCard.title || "", // Provide default empty string if title is undefined
        coverImageUrl: coverImageUrl || "", // Provide default empty string if coverImageUrl is undefined
        albumImageUrls: albumImageUrls || [] // Provide default empty array if albumImageUrls is undefined
      });

      onMessage("Gallery card created successfully.");
      fetchGalleryCards();
    } catch (err) {
      onMessage("Error creating gallery card.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (id, updatedData) => {
    setIsLoading(true);
    try {
      const currentCard = galleryCards.find(card => card.id === id);
      if (!currentCard) {
        throw new Error("Card not found");
      }

      let coverImageUrl = updatedData.coverImageUrl || currentCard.coverImageUrl;
      const albumImageUrls = [...(updatedData.albumImageUrls || currentCard.albumImageUrls)];

      if (newCoverImage) {
        console.log("Uploading new cover image...");
        const coverImageUrls = await uploadImages([newCoverImage], "gallery", id);
        coverImageUrl = coverImageUrls[0];
        console.log("New cover image URL:", coverImageUrl);
      }

      if (newAlbumImages.length > 0) {
        console.log("Uploading new album images...");
        const newAlbumImageUrls = await uploadImages(newAlbumImages, "gallery", id);
        albumImageUrls.push(...newAlbumImageUrls); // Preserve existing album images and add new ones
        console.log("New album images URLs:", albumImageUrls);
      }

      const docRef = doc(db, "gallery", id);
      await updateDoc(docRef, {
        ...updatedData,
        coverImageUrl: coverImageUrl || currentCard.coverImageUrl, // Use existing or new coverImageUrl
        albumImageUrls: albumImageUrls // Preserve existing album images and add new ones
      });

      onMessage("Gallery card updated successfully.");
      fetchGalleryCards();
    } catch (err) {
      onMessage("Error updating gallery card.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await deleteDoc(doc(db, "gallery", id));
      onMessage("Gallery card deleted successfully.");
      fetchGalleryCards();
    } catch (err) {
      onMessage("Error deleting gallery card.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const startEditing = (card) => {
    setEditingCard(card);
    setUpdatedData(card);
    setNewCoverImage(null);
    setNewAlbumImages([]);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.name === "coverPhoto") {
      setNewCoverImage(e.target.files[0]);
    } else if (e.target.name === "albumPhotos") {
      setNewAlbumImages([...e.target.files]);
    }
  };

  const handleUpdateSubmit = async () => {
    if (editingCard) {
      await handleEdit(editingCard.id, updatedData);
      setEditingCard(null);
      setUpdatedData({});
      setNewCoverImage(null);
      setNewAlbumImages([]);
    }
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
    setUpdatedData({});
    setNewCoverImage(null);
    setNewAlbumImages([]);
  };

  return (
    <div className="gallery-card-manager">
      <GalleryInputCard
        onCreate={handleCreate}
        isLoading={isLoading}
      />
      <div className="card-list">
        {galleryCards.map(card => (
          <GalleryCard
            key={card.id}
            item={card}
            onEdit={() => startEditing(card)}
            onDelete={() => handleDelete(card.id)}
          />
        ))}
      </div>

      {editingCard && (
        <div className="editing-form">
          <h3>Editing {editingCard.title}</h3>
          <input
            type="text"
            name="title"
            value={updatedData.title || ""}
            onChange={handleUpdateChange}
            placeholder="Update title"
          />
          <input
            type="file"
            name="coverPhoto"
            onChange={handleImageChange}
          />
          <input
            type="file"
            name="albumPhotos"
            multiple
            onChange={handleImageChange}
          />
          <button onClick={handleUpdateSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default GalleryCardManager;
