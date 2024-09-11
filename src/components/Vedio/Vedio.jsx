import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const Vedio = () => {
  const [videoUrl, setVideoUrl] = useState("");

  // Function to check if the URL is a YouTube link
  const isYouTubeUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;
    return youtubeRegex.test(url);
  };

  // Function to get the embedded YouTube URL
  const getYouTubeEmbedUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  // Fetch video URL from Firebase
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoCollection = collection(db, "videos");
        const videoSnapshot = await getDocs(videoCollection);
        const videoData = videoSnapshot.docs.map((doc) => doc.data());

        if (videoData.length > 0) {
          setVideoUrl(videoData[0].url); // Assuming you want the first video
        }
      } catch (err) {
        console.error("Error fetching video URL:", err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg"> {/* Changed to modal-lg for a larger modal */}
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">Video</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="ratio ratio-16x9">
              {isYouTubeUrl(videoUrl) ? (
                <iframe
                  className="embed-responsive-item"
                  src={getYouTubeEmbedUrl(videoUrl)}
                  id="video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", minHeight: "450px", border: "none" }} // Adjusted height and added border: none
                ></iframe>
              ) : (
                <video controls src={videoUrl} style={{ width: "100%", height: "100%", minHeight: "450px", border: "none" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
