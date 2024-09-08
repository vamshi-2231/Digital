import { useState } from "react";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const DigitalvCard = ({ title, data, collectionName }) => {
  const [isEditing, setIsEditing] = useState(null); // Track the card being edited
  const [editedData, setEditedData] = useState({});

  // Handle input change for the card being edited
  const handleInputChange = (id, field, value) => {
    setEditedData((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  // Update the card in Firebase
  const handleUpdate = async (id) => {
    const docRef = doc(db, collectionName, id);
    const updatedData = editedData[id];
    await updateDoc(docRef, updatedData);
    setIsEditing(null);
  };

  // Delete a card from Firebase
  const handleDelete = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  };

  return (
    <div className="digitalvcard">
      <h2>{title}</h2>
      <div className="card-list">
        {data.map((item) => (
          <div key={item.id} className="card-item">
            {isEditing === item.id ? (
              <div className="edit-mode">
                <input
                  className="edit-input"
                  type="text"
                  value={editedData[item.id]?.name || item.name}
                  onChange={(e) => handleInputChange(item.id, "name", e.target.value)}
                />
                <input
                  className="edit-input"
                  type="text"
                  value={editedData[item.id]?.profession || item.profession}
                  onChange={(e) => handleInputChange(item.id, "profession", e.target.value)}
                />
                <textarea
                  className="edit-textarea"
                  value={editedData[item.id]?.description || item.description}
                  onChange={(e) => handleInputChange(item.id, "description", e.target.value)}
                />
                <div className="button-group">
                  <button className="save-button" onClick={() => handleUpdate(item.id)}>Save</button>
                  <button className="cancel-button" onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="view-mode">
                <p>Name: {item.name}</p>
                <p>Profession: {item.profession}</p>
                <p>Description: {item.description}</p>
                {item.photoUrl && <img className="card-image" src={item.photoUrl} alt={item.name} />}
                <div className="button-group">
                  <button className="edit-button" onClick={() => setIsEditing(item.id)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalvCard;
