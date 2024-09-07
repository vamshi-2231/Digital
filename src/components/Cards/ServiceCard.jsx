import React from "react";
import "./ServiceCard.css"; // Adjusted path for CSS import

const ServiceCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="service-card">
      <h2 className="service-card-title">{item.title}</h2>
      <div className="service-card-images">
      {item.imageUrl && (
        <img src={item.imageUrl} alt="Image" className="about-card-image" />
      )}
      </div>
      <div className="service-card-buttons">
        <button className="service-card-button" onClick={() => onEdit(item.id)}>Edit</button>
        <button className="service-card-button" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ServiceCard;
