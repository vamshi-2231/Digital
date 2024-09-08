import { useState } from "react";

function ServiceInputCard({ onCreate, isLoading }) {
  const [newService, setNewService] = useState({ title: "" });
  const [newServiceImages, setNewServiceImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Validate file types
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    
    // Check if all files are valid images
    const invalidFiles = files.filter(file => !validTypes.includes(file.type));
    
    if (invalidFiles.length > 0) {
      setErrorMessage("Only image files (jpg, png, gif) are allowed.");
    } else {
      setErrorMessage("");
      setNewServiceImages(files);
    }
  };

  const handleSubmit = () => {
    // Ensure that newService and title exist before validation
    if (!newService.title || newService.title.trim() === "") {
      setErrorMessage("Please fill in the title.");
      return;
    }

    if (newServiceImages.length === 0) {
      setErrorMessage("Please upload at least one image.");
      return;
    }
    
    setErrorMessage("");
    onCreate(newService, newServiceImages);
  };

  return (
    <div className="input-card">
      <h2>Add Service</h2>
      <input
        type="text"
        placeholder="Title"
        value={newService.title}
        onChange={(e) => setNewService({ ...newService, title: e.target.value })}
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="input-card-file"
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Service"}
      </button>
    </div>
  );
}

export default ServiceInputCard;
