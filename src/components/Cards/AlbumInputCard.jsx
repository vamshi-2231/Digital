import { useState } from "react";

function AlbumInputCard({ onCreate, isLoading }) {
  const [newAlbumPhoto, setNewAlbumPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [preview, setPreview] = useState(null);

  // Validate file type and preview image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && !validTypes.includes(file.type)) {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
      setNewAlbumPhoto(null);
      setPreview(null);
    } else {
      setErrorMessage("");
      setNewAlbumPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!newAlbumPhoto) {
      setErrorMessage("Please upload an image file.");
      return;
    }
    onCreate(newAlbumPhoto);
  };

  return (
    <div className="input-card">
      <h2>Add Album Photo</h2>
      <input type="file" onChange={handleFileChange} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      {/* Preview the selected image */}
      {preview && (
        <div className="image-preview">
          <img src={preview} alt="Preview" style={{ width: "100%", height: "auto", marginTop: "10px" }} />
        </div>
      )}
      
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Album Photo"}
      </button>
    </div>
  );
}

export default AlbumInputCard;
