import React, { useState } from "react";
import "./CollegeCard.css";

function CollegeCard({ college, onUpdate, isAdmin }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(college.title);
  const [updatedDescription, setUpdatedDescription] = useState(college.description);
  const [newImageUpload, setNewImageUpload] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await onUpdate(college.id, { title: updatedTitle, description: updatedDescription }, newImageUpload);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating college:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="college-card">
      <h1>{college.title}</h1>
      {college.imageUrl && (
        <img
          src={college.imageUrl}
          alt={college.title}
          className="college-image"
          width="250"
          height="300"
        />
      )}
      <p>{college.description}</p>
      {isAdmin && (
        <>
          {isEditing ? (
            <>
              <input
                placeholder="New title..."
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                placeholder="New description..."
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                rows={4}
              />
              <input
                type="file"
                onChange={(e) => setNewImageUpload(e.target.files[0])}
              />
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
              >
                {isUpdating ? "Updating..." : "Update College"}
              </button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </>
      )}
    </div>
  );
}

export default CollegeCard;
