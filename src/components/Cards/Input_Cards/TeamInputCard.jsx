import React, { useState } from "react";
// import "./TeamInputCard.css";

function TeamInputCard({ onCreate, isLoading }) {
  const [newTeam, setNewTeam] = useState({ name: "", profession: "", description: "" });
  const [newTeamImage, setNewTeamImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && !validTypes.includes(file.type)) {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
      setNewTeamImage(null);
      setPreview(null);
    } else {
      setErrorMessage("");
      setNewTeamImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCreate = () => {
    const { name, profession, description } = newTeam;
    
    if (!name || !profession || !description) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (!newTeamImage) {
      setErrorMessage("Please upload an image file.");
      return;
    }

    setErrorMessage("");
    onCreate(newTeam, newTeamImage);
    setNewTeam({ name: "", profession: "", description: "" }); // Clear input fields after submission
    setNewTeamImage(null); // Clear image after submission
    setPreview(null); // Clear the preview after submission
  };

  return (
    <div className="input-card">
      <h2>Add Team Member</h2>
      <input
        type="text"
        placeholder="Name"
        value={newTeam.name}
        onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
        className="input-card-field"
      />
      <input
        type="text"
        placeholder="Profession"
        value={newTeam.profession}
        onChange={(e) => setNewTeam({ ...newTeam, profession: e.target.value })}
        className="input-card-field"
      />
      <textarea
        placeholder="Description"
        value={newTeam.description}
        onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
        className="input-card-field"
        rows={4}
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
        {isLoading ? "Adding..." : "Add Team Member"}
      </button>
    </div>
  );
}

export default TeamInputCard;
