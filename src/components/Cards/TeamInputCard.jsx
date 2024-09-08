import React, { useState } from "react";
// import "./TeamInputCard.css";

function TeamInputCard({ onCreate, isLoading }) {
  const [newTeam, setNewTeam] = useState({ name: "", profession: "", description: "" });
  const [newTeamImage, setNewTeamImage] = useState(null);

  const handleCreate = () => {
    if (newTeam.name && newTeam.profession && newTeam.description) {
      onCreate(newTeam, newTeamImage);
      setNewTeam({ name: "", profession: "", description: "" }); // Clear input fields after submission
      setNewTeamImage(null);
    }
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
        onChange={(e) => setNewTeamImage(e.target.files[0])}
        className="input-card-file"
      />
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
