import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../config/firebase"; // Firestore config

export default function AlbumPage() {
  const { id } = useParams(); // Retrieve the album ID from the URL
  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);

  // Fetch album data from Firestore based on the ID
  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const albumDoc = doc(db, "gallery", id);
        const albumSnapshot = await getDoc(albumDoc);
        if (albumSnapshot.exists()) {
          setAlbum(albumSnapshot.data());
        } else {
          console.error("Album not found");
        }
      } catch (err) {
        console.error("Error fetching album: ", err);
      }
    };
    
    fetchAlbum();
  }, [id]);

  const handleGoBackToGallery = () => {
    navigate('/gallery'); // Navigate back to the gallery page
  };

  if (!album) return <div>Loading...</div>; // Show loading state

  return (
    <div className="album-page">
      {/* Go Back to Gallery Button */}
      <button 
        onClick={handleGoBackToGallery} 
        style={{ margin: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background:'#EAA636' }}
      >
        Go Back to Gallery
      </button>

      {/* Album Photos in a Grid */}
      <div className="container">
        <div className="row">
          {album.albumImageUrls && album.albumImageUrls.map((url, index) => (
            <div className="col-md-4" key={index}>
              <div className="photo-card">
                <img src={url} className="img-fluid" alt={`Album Photo ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
