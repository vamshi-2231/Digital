import React, { useState } from "react";
import "./FeatureInputCard.css";

function FeatureInputCard({ onCreate, isLoading }) {
  const [newFeature, setNewFeature] = useState({ title: "" });
  const [newFeatureImage, setNewFeatureImage] = useState(null);

  const handleCreate = () => {
    if (newFeature.title) {
      onCreate(newFeature, newFeatureImage);
      setNewFeature({ title: "" }); // Clear input fields after submission
      setNewFeatureImage(null);
    }
  };

  return (
    <div className="input-card">
      <h2>Add Feature</h2>
      <input
        type="text"
        placeholder="Title"
        value={newFeature.title}
        onChange={(e) => setNewFeature({ ...newFeature, title: e.target.value })}
        className="input-card-field"
      />
      <input
        type="file"
        onChange={(e) => setNewFeatureImage(e.target.files[0])}
        className="input-card-file"
      />
      <button
        onClick={handleCreate}
        disabled={isLoading}
        className="input-card-button"
      >
        {isLoading ? "Adding..." : "Add Feature"}
      </button>
    </div>
  );
}

export default FeatureInputCard;
