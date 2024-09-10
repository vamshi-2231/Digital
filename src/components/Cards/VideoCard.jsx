import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import '../Cards/Card_styles/Card.css';

const VideoCard = ({ item, onDelete, fetchCollection, onMessage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUrl, setUpdatedUrl] = useState(item.url);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditSubmit = async () => {
    setIsLoading(true);
    try {
      const docRef = doc(db, "videos", item.id);
      await updateDoc(docRef, {
        url: updatedUrl
      });

      onMessage("Video updated successfully.");
      fetchCollection();
    } catch (err) {
      console.error("Error updating video:", err);
      onMessage("Error updating video.");
    } finally {
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="video-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedUrl}
            onChange={(e) => setUpdatedUrl(e.target.value)}
          />
          <button onClick={handleEditSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <video controls src={item.url} style={{ width: "100%", height: "auto" }} />
          <div className="video-card-buttons">
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
            <button onClick={() => onDelete(item.id)} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
