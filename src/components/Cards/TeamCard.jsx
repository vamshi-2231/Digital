import React from "react";
import "./TeamCard.css"; // Adjusted path for CSS import

const TeamCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="team-card">
      <h2 className="team-card-title">{item.name}</h2>
      <p className="team-card-profession">Profession: {item.profession}</p>
      <p className="team-card-description">Description: {item.description}</p>
      {item.imageUrl && (
        <img src={item.imageUrl} alt="Team Image" className="about-card-image" />
      )}
      <div className="team-card-buttons">
        <button className="team-card-button" onClick={() => onEdit(item.id)}>Edit</button>
        <button className="team-card-button" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TeamCard;
