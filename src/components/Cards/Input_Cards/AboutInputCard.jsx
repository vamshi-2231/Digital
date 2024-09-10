import React, { useState } from "react";

function AboutInputCard({ onCreate, isLoading }) {
  const [newAbout, setNewAbout] = useState({ title: "" });
  const [newAboutImage, setNewAboutImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && validTypes.includes(file.type)) {
      setNewAboutImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrorMessage("");
    } else {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
    }
  };

  const handleSubmit = () => {
    if (!newAbout.title || !newAboutImage) {
      setErrorMessage("Please fill in all fields and upload an image.");
      return;
    }

    setErrorMessage("");
    onCreate(newAbout, newAboutImage);
  };

  return (
    <div className="input-card">
      <h2>Add About</h2>
      <input
        type="text"
        placeholder="Title"
        value={newAbout.title}
        onChange={(e) => setNewAbout({ ...newAbout, title: e.target.value })}
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
        {isLoading ? "Adding..." : "Add About"}
      </button>
    </div>
  );
}

export default AboutInputCard;
