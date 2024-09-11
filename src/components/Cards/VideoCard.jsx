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

  const isYouTubeUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
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
          {isYouTubeUrl(item.url) ? (
            <iframe
              className="embed-responsive-item"
              src={getYouTubeEmbedUrl(item.url)}
              id="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "auto" }}
            ></iframe>
          ) : (
            <video controls src={item.url} style={{ width: "100%", height: "auto" }} />
          )}
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
