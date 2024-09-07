import React from "react";
import "./FeatureCard.css"; // Adjusted path for CSS import

const FeatureCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="feature-card">
      <h2 className="feature-card-title">{item.title}</h2>
      {item.imageUrl && (
        <img src={item.imageUrl} alt="Image" className="about-card-image" />
      )}
      <div className="feature-card-buttons">
        <button className="feature-card-button" onClick={() => onEdit(item.id)}>Edit</button>
        <button className="feature-card-button" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default FeatureCard;
