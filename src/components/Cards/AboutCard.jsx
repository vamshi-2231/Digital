import React from "react";
import "./AboutCard.css"; // Adjusted path for CSS import

const AboutCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="about-card">
      {item.imageUrl && (
        <img src={item.imageUrl} alt="About Image" className="about-card-image" />
      )}
      <div className="about-card-buttons">
        <button className="about-card-button" onClick={() => onEdit(item.id)}>Edit</button>
        <button className="about-card-button" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default AboutCard;
