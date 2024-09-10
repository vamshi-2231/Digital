import React, { useState } from "react";

const VideoInputCard = ({ onCreate, isLoading }) => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ url: videoUrl }, null);
    setVideoUrl(""); // Clear the input after submission
  };

  return (
    <div className="video-input-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter video URL"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Video"}
        </button>
      </form>
    </div>
  );
};

export default VideoInputCard;
