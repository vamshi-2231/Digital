import React, { useState } from "react";
import "../Card_styles/FeatureInputCard.css";

function FeatureInputCard({ onCreate, isLoading }) {
  const [newFeature, setNewFeature] = useState({ title: "" });
  const [newFeatureImage, setNewFeatureImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && !validTypes.includes(file.type)) {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
      setNewFeatureImage(null);
      setPreview(null);
    } else {
      setErrorMessage("");
      setNewFeatureImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCreate = () => {
    if (!newFeature.title) {
      setErrorMessage("Please fill in the title.");
      return;
    }
    if (!newFeatureImage) {
      setErrorMessage("Please upload an image file.");
      return;
    }

    setErrorMessage("");
    onCreate(newFeature, newFeatureImage);
    setNewFeature({ title: "" }); // Clear input fields after submission
    setNewFeatureImage(null); // Clear image after submission
    setPreview(null); // Clear the preview after submission
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
        onChange={handleFileChange}
        className="input-card-file"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Preview the selected image */}
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" style={{ width: "100%", height: "auto", marginTop: "10px" }} />
        </div>
      )}

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
