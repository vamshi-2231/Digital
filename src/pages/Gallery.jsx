import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../config/firebase"; // Firestore config

export default function Gallery() {
  const navigate = useNavigate();
  const [galleries, setGalleries] = useState([]);

  // Fetch galleries from Firestore
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const galleryCollection = collection(db, "gallery");
        const gallerySnapshot = await getDocs(galleryCollection);
        const galleryList = gallerySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGalleries(galleryList);
      } catch (err) {
        console.error("Error fetching galleries: ", err);
      }
    };
    
    fetchGalleries();
  }, []);

  const handleViewAlbum = (id) => {
    navigate(`/gallery/album/${id}`); // Navigate to album page with gallery ID
  };

  const handleGoBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="gallery-page">
      {/* Go Back Button */}
      <button 
        onClick={handleGoBack} 
        style={{ margin: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer',background:'#EAA636'}}
      >
        Go Back
      </button>

      {/* Gallery Grid */}
      <div className="container">
        <div className="row">
          {galleries.map((gallery) => (
            <div className="col-md-4" key={gallery.id}>
              <div className="card mb-4 shadow-sm">
                <img src={gallery.coverImageUrl} className="card-img-top" alt={gallery.title} />
                <div className="card-body">
                  <h5 className="card-title">{gallery.title}</h5>
                  <p className="card-text">{gallery.name}</p>
                  <button 
                    onClick={() => handleViewAlbum(gallery.id)} 
                    className="btn btn-primary"
                  >
                    View Album
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
