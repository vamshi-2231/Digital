import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const navigate = useNavigate();
  
  const photos = [
    {
      id: 1,
      title: "Beautiful Landscape",
      imgSrc: "https://picsum.photos/300/200", // Replace with your image URL
    },
    {
      id: 2,
      title: "City Skyline",
      imgSrc: "https://picsum.photos/300/200", // Replace with your image URL
    },
    {
      id: 3,
      title: "Mountain View",
      imgSrc: "https://picsum.photos/300/200", // Replace with your image URL
    },
    // Add more photos as needed
  ];

  const handleViewAlbum = (id) => {
    navigate(`/gallery/album/${id}`); // Navigate to album page
  };

  const handleGoBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="gallery-page">
      {/* Go Back Button */}
      <button 
        onClick={handleGoBack} 
        style={{ 
          margin: '20px', 
          padding: '10px 20px', 
          fontSize: '16px', 
          cursor: 'pointer' 
        }}
      >
        Go Back
      </button>

      {/* Gallery Grid */}
      <div className="container">
        <div className="row">
          {photos.map(photo => (
            <div className="col-md-4" key={photo.id}>
              <div className="card mb-4 shadow-sm">
                <img src={photo.imgSrc} className="card-img-top" alt={photo.title} />
                <div className="card-body">
                  <h5 className="card-title">{photo.title}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <button 
                      onClick={() => handleViewAlbum(photo.id)} 
                      className="btn btn-primary"
                    >
                      View Album
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
