import React, { useState } from "react";
// import "../Card_Styles/AboutCard.css";

function AboutInputCard({ onCreate, isLoading }) {
  const [newAboutImage, setNewAboutImage] = useState(null);

  const handleCreate = () => {
    if (newAboutImage) {
      onCreate(newAboutImage);
      setNewAboutImage(null); // Clear the file input after submission
    }
  };

  return (
    <div className="input-card">
      <h2>Add About Image</h2>
      <input
        type="file"
        onChange={(e) => setNewAboutImage(e.target.files[0])}
        className="input-card-file"
      />
      <button
        onClick={handleCreate}
        disabled={isLoading}
        className="input-card-button"
      >
        {isLoading ? "Adding..." : "Add About Image"}
      </button>
    </div>
  );
}

export default AboutInputCard;
