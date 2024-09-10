import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import '../Cards/Card_styles/Card.css';

const TeamCard = ({ item, onDelete, fetchCollection, onMessage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: item.name,
    profession: item.profession,
    description: item.description || "",
  });
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(item.coverImageUrl || null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewCoverImage(file);
    setCoverImagePreview(URL.createObjectURL(file)); // Display image preview
  };

  const handleEditSubmit = async () => {
    setIsLoading(true);
    try {
      let coverImageUrl = item.coverImageUrl;
      if (newCoverImage) {
        const imageRef = ref(storage, `teamImages/${item.id}_${Date.now()}_${newCoverImage.name}`);
        await uploadBytes(imageRef, newCoverImage);
        coverImageUrl = await getDownloadURL(imageRef);
      }

      const docRef = doc(db, "team", item.id);
      await updateDoc(docRef, {
        ...updatedData,
        coverImageUrl
      });

      onMessage("Team member updated successfully.");
      fetchCollection();
    } catch (err) {
      console.error("Error updating team member:", err);
      onMessage("Error updating team member.");
    } finally {
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="team-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedData.name}
            onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="text"
            value={updatedData.profession}
            onChange={(e) => setUpdatedData({ ...updatedData, profession: e.target.value })}
            placeholder="Profession"
          />
          <textarea
            value={updatedData.description}
            onChange={(e) => setUpdatedData({ ...updatedData, description: e.target.value })}
            placeholder="Description"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {coverImagePreview && <img src={coverImagePreview} alt="Image preview" className="image-preview" />}
          <div className="button-group">
            <button className="edit-button" onClick={handleEditSubmit} disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </button>
            <button className="edit-button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <p>{item.profession}</p>
          <p>{item.description}</p>
          {item.coverImageUrl && <img src={item.coverImageUrl} alt={item.name} className="image-preview" />}
          <div className="button-group">
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamCard;
