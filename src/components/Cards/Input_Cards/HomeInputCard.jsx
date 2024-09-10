import React, { useState } from "react";

function HomeInputCard({ onCreate, isLoading }) {
  const [newHome, setNewHome] = useState({ title: "" });
  const [newHomeImage, setNewHomeImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && validTypes.includes(file.type)) {
      setNewHomeImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrorMessage("");
    } else {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
    }
  };

  const handleSubmit = () => {
    if (!newHome.title || !newHomeImage) {
      setErrorMessage("Please fill in all fields and upload an image.");
      return;
    }

    setErrorMessage("");
    onCreate(newHome, newHomeImage);
  };

  return (
    <div className="input-card">
      <h2>Add Home</h2>
      <input
        type="text"
        placeholder="Title"
        value={newHome.title}
        onChange={(e) => setNewHome({ ...newHome, title: e.target.value })}
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="input-card-file"
        accept="image/jpeg, image/png, image/gif"
      />
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" style={{ width: "100%", height: "auto", marginTop: "10px" }} />
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Home"}
      </button>
    </div>
  );
}

export default HomeInputCard;
