import React, { useState } from "react";
import '../Card_styles/GalleryInputCard.css'

const GalleryInputCard = ({ onCreate, isLoading }) => {
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState(""); // New state for name
  const [errorMessage, setErrorMessage] = useState("");
  const [coverPreview, setCoverPreview] = useState(null);
  const [albumPreviews, setAlbumPreviews] = useState([]);

  const validTypes = ["image/jpeg", "image/png", "image/gif"];

  // Validate cover photo file type and preview
  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && !validTypes.includes(file.type)) {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
      setCoverPhoto(null);
      setCoverPreview(null);
    } else {
      setErrorMessage("");
      setCoverPhoto(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  // Validate album photos and preview multiple images
  const handleAlbumPhotosChange = (e) => {
    const files = Array.from(e.target.files);
    const invalidFiles = files.filter(file => !validTypes.includes(file.type));

    if (invalidFiles.length > 0) {
      setErrorMessage("Only image files (jpg, png, gif) are allowed for album photos.");
      setAlbumPhotos([]);
      setAlbumPreviews([]);
    } else {
      setErrorMessage("");
      setAlbumPhotos(files);
      setAlbumPreviews(files.map(file => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = () => {
    if (!coverPhoto) {
      setErrorMessage("Please upload a valid cover photo.");
      return;
    }
    if (albumPhotos.length === 0) {
      setErrorMessage("Please upload at least one album photo.");
      return;
    }

    const files = {
      coverPhoto,
      albumPhotos,
    };
    onCreate({ title, name }, files); // Include name in the submission
  };

  return (
    <div className="gallery-input-card">
      <h3>Add New Gallery</h3>
      <div className="input-field">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter gallery title"
        />
      </div>

      <div className="gallery-input-field">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter gallery name"
        />
      </div>

      <div className="gallery-input-field">
        <label>Cover Photo</label>
        <input type="file" onChange={handleCoverPhotoChange} />
        {coverPreview && (
          <div className="image-preview">
            <img
              src={coverPreview}
              alt="Cover Preview"
              style={{ width: "100%", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}
      </div>

      <div className="gallery-input-field">
        <label>Album Photos</label>
        <input type="file" multiple onChange={handleAlbumPhotosChange} />
        {albumPreviews.length > 0 && (
          <div className="album-previews">
            {albumPreviews.map((preview, index) => (
              <div key={index} className="image-preview" style={{ marginTop: "10px" }}>
                <img
                  src={preview}
                  alt={`Album Preview ${index + 1}`}
                  style={{ width: "100px", height: "100px", marginRight: "10px" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Gallery"}
      </button>
    </div>
  );
};

export default GalleryInputCard;
