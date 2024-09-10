import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import '../Cards/Card_styles/Card.css'

const ServiceCard = ({ item, onDelete, fetchCollection, onMessage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ title: item.title, description: item.description });
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditSubmit = async () => {
    setIsLoading(true);
    try {
      let coverImageUrl = item.coverImageUrl;
      if (newCoverImage) {
        const imageRef = ref(storage, `servicesImages/${item.id}_${Date.now()}_${newCoverImage.name}`);
        await uploadBytes(imageRef, newCoverImage);
        coverImageUrl = await getDownloadURL(imageRef);
      }

      const docRef = doc(db, "services", item.id);
      await updateDoc(docRef, {
        ...updatedData,
        coverImageUrl
      });

      onMessage("Service updated successfully.");
      fetchCollection();
    } catch (err) {
      console.error("Error updating service:", err);
      onMessage("Error updating service.");
    } finally {
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="service-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedData.title}
            onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
          />
          <input
            type="text"
            value={updatedData.description}
            onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
          />
          <input type="file" onChange={(e) => setNewCoverImage(e.target.files[0])} />
          <button onClick={handleEditSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.coverImageUrl && <img src={item.coverImageUrl} alt={item.title} />}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
