import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import '../Cards/Card_styles/Card.css'

const TeamCard = ({ item, onDelete, fetchCollection, onMessage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ name: item.name, role: item.role });
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
          />
          <input
            type="text"
            value={updatedData.role}
            onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
          />
          <input type="file" onChange={(e) => setNewCoverImage(e.target.files[0])} />
          <button onClick={handleEditSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <p>{item.role}</p>
          {item.coverImageUrl && <img src={item.coverImageUrl} alt={item.name} />}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TeamCard;
