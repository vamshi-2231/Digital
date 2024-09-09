import React, { useState } from "react";
import './GalleryCard.css';

const GalleryCard = ({ item, onEdit, onDelete }) => {
  const [showAlbum, setShowAlbum] = useState(false);

  const handleViewClick = () => {
    setShowAlbum(true);
  };

  const handleHideClick = () => {
    setShowAlbum(false);
  };

  return (
    <div className="gallery-card">
      <div className="gallery-card-header">
        <h4>{item.title}</h4>
        <div className="gallery-card-actions">
          <button className="card-button" onClick={() => onEdit(item.id)}>Edit</button>
          <button className="card-button" onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      </div>

      <div className="gallery-card-cover">
        {item.coverImageUrl && <img src={item.coverImageUrl} alt={item.title} />}
      </div>

      <div className="card-buttons">
        {showAlbum ? (
          <button className="card-button secondary" onClick={handleHideClick}>
            Hide
          </button>
        ) : (
          <button className="card-button" onClick={handleViewClick}>
            View
          </button>
        )}
      </div>

      {showAlbum && item.albumImageUrls && (
        <div className="gallery-card-album">
          {item.albumImageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Album ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
