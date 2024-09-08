import React from "react";
import "../../pages/Admin.css";
import "./HomeCard.css"

const HomeCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="card">
      {item.imageUrl && <img src={item.imageUrl} alt="Home Photo" className="card-image" />}
      <button className="card-button" onClick={() => onEdit(item.id)}>Edit</button>
      <button className="card-button" onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

export default HomeCard;
