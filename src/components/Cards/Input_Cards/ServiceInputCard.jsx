import React, { useState } from "react";
// import "./ServiceInputCard.css";

function ServiceInputCard({ onCreate, isLoading }) {
  const [newService, setNewService] = useState({ title: "" });
  const [newServiceImage, setNewServiceImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Validate file type and update state
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && validTypes.includes(file.type)) {
      setNewServiceImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrorMessage("");
    } else {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
      setNewServiceImage(null);
      setImagePreview("");
    }
  };

  const handleSubmit = () => {
    if (!newService.title || newService.title.trim() === "") {
      setErrorMessage("Please fill in the title.");
      return;
    }

    if (!newServiceImage) {
      setErrorMessage("Please upload an image.");
      return;
    }

    setErrorMessage("");
    onCreate(newService, newServiceImage);
    // Reset fields after submission
    setNewService({ title: "" });
    setNewServiceImage(null);
    setImagePreview("");
  };

  return (
    <div className="input-card">
      <h2>Add Service</h2>
      <input
        type="text"
        placeholder="Title"
        value={newService.title}
        onChange={(e) => setNewService({ ...newService, title: e.target.value })}
        className="input-card-field"
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
      <button onClick={handleSubmit} disabled={isLoading} className="input-card-button">
        {isLoading ? "Adding..." : "Add Service"}
      </button>
    </div>
  );
}

export default ServiceInputCard;
