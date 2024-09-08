import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams and useNavigate

export default function AlbumPage() {
  const { id } = useParams(); // Retrieve the album ID from the URL
  const navigate = useNavigate();

  // Example album photos (replace these with real album data)
  const albumPhotos = [
    {
      id: 1,
      imgSrc: "https://picsum.photos/300/200", // Replace with actual image URL
    },
    {
      id: 2,
      imgSrc: "https://picsum.photos/300/200", // Replace with actual image URL
    },
    {
      id: 3,
      imgSrc: "https://picsum.photos/300/200", // Replace with actual image URL
    },
    // Add more photos as needed
  ];

  const handleGoBackToGallery = () => {
    navigate('/gallery'); // Navigate back to the gallery page
  };

  return (
    <div className="album-page">
      {/* Go Back to Gallery Button */}
      <button 
        onClick={handleGoBackToGallery} 
        style={{ 
          margin: '20px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer' 
        }}
      >
        Go Back to Gallery
      </button>

      {/* Album Photos in a Grid */}
      <div className="container">
        <div className="row">
          {albumPhotos.map(photo => (
            <div className="col-md-4" key={photo.id}>
              <div className="photo-card">
                <img src={photo.imgSrc} className="img-fluid" alt={`Album Photo ${photo.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
