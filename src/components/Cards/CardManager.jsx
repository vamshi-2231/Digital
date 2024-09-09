import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import AboutInputCard from "./AboutInputCard";
import ServiceInputCard from "./ServiceInputCard";
import HomeInputCard from "./HomeInputCard";
import TeamInputCard from "./TeamInputCard";
import FeatureInputCard from "./FeatureInputCard";
import AboutCard from "./AboutCard";
import ServiceCard from "./ServiceCard";
import HomeCard from "./HomeCard";
import TeamCard from "./TeamCard";
import FeatureCard from "./FeatureCard";

const CardManager = ({ isLoading, setIsLoading, onMessage }) => {
  const [cards, setCards] = useState({
    about: [],
    service: [],
    home: [],
    team: [],
    features: []
  });
  const [currentCardType, setCurrentCardType] = useState("team");
  const [editingCard, setEditingCard] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [newCoverImage, setNewCoverImage] = useState(null);

  useEffect(() => {
    fetchAllCollections();
  }, []);

  const fetchCollectionData = async (collectionName, setter) => {
    try {
      const collectionRef = collection(db, collectionName);
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setter(filteredData);
    } catch (err) {
      console.error(`Error fetching ${collectionName} data:`, err);
      onMessage(`Error fetching ${collectionName} data.`);
    }
  };

  const fetchAllCollections = async () => {
    setIsLoading(true);
    try {
      await Promise.all([
        fetchCollectionData("team", (data) => setCards((prev) => ({ ...prev, team: data }))),
        fetchCollectionData("features", (data) => setCards((prev) => ({ ...prev, features: data }))),
        fetchCollectionData("services", (data) => setCards((prev) => ({ ...prev, service: data }))),
        fetchCollectionData("about", (data) => setCards((prev) => ({ ...prev, about: data }))),
        fetchCollectionData("home", (data) => setCards((prev) => ({ ...prev, home: data })))
      ]);
    } catch (err) {
      onMessage("Error fetching collections.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImage = async (image, type, id) => {
    const imageRef = ref(storage, `${type}Images/${id}_${Date.now()}_${image.name}`);
    await uploadBytes(imageRef, image);
    return await getDownloadURL(imageRef);
  };

  const handleCreate = async (type, newCard, file) => {
    setIsLoading(true);
    try {
      let coverImageUrl = null;
      if (file) {
        coverImageUrl = await uploadImage(file, type, Date.now());
      }

      await addDoc(collection(db, type), {
        ...newCard,
        coverImageUrl
      });

      onMessage(`${type} created successfully.`);
      fetchCollectionData(type, (data) => setCards((prev) => ({ ...prev, [type]: data })));
    } catch (err) {
      onMessage(`Error creating ${type}.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (type, id, updatedData) => {
    setIsLoading(true);
    try {
      let coverImageUrl = updatedData.coverImageUrl || null;
      if (newCoverImage) {
        coverImageUrl = await uploadImage(newCoverImage, type, id);
      }

      const docRef = doc(db, type, id);
      await updateDoc(docRef, {
        ...updatedData,
        coverImageUrl
      });

      onMessage(`${type} updated successfully.`);
      fetchCollectionData(type, (data) => setCards((prev) => ({ ...prev, [type]: data })));
    } catch (err) {
      onMessage(`Error updating ${type}.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (type, id) => {
    setIsLoading(true);
    try {
      await deleteDoc(doc(db, type, id));
      onMessage(`${type} deleted successfully.`);
      fetchCollectionData(type, (data) => setCards((prev) => ({ ...prev, [type]: data })));
    } catch (err) {
      onMessage(`Error deleting ${type}.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const startEditing = (card) => {
    setEditingCard(card);
    setUpdatedData(card);
    setNewCoverImage(null);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.name === "coverPhoto") {
      setNewCoverImage(e.target.files[0]);
    }
  };

  const handleUpdateSubmit = async () => {
    if (editingCard) {
      await handleEdit(currentCardType, editingCard.id, updatedData);
      setEditingCard(null);
      setUpdatedData({});
      setNewCoverImage(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingCard(null);
    setUpdatedData({});
    setNewCoverImage(null);
  };

  return (
    <div className="card-manager">
      <div className="card-manager-controls">
        <button onClick={() => setCurrentCardType("team")}>Manage Team</button>
        <button onClick={() => setCurrentCardType("features")}>Manage Features</button>
        <button onClick={() => setCurrentCardType("service")}>Manage Services</button>
        <button onClick={() => setCurrentCardType("about")}>Manage About</button>
        <button onClick={() => setCurrentCardType("home")}>Manage Home Photos</button>
      </div>

      <div className="card-manager-content">
        {currentCardType === "team" && (
          <>
            <TeamInputCard onCreate={(newCard, file) => handleCreate("team", newCard, file)} isLoading={isLoading} />
            <div className="card-list">
              {cards.team.map((card) => (
                <TeamCard
                  key={card.id}
                  item={card}
                  onEdit={() => startEditing(card)}
                  onDelete={() => handleDelete("team", card.id)}
                />
              ))}
            </div>
          </>
        )}

        {currentCardType === "features" && (
          <>
            <FeatureInputCard onCreate={(newCard, file) => handleCreate("features", newCard, file)} isLoading={isLoading} />
            <div className="card-list">
              {cards.features.map((card) => (
                <FeatureCard
                  key={card.id}
                  item={card}
                  onEdit={() => startEditing(card)}
                  onDelete={() => handleDelete("features", card.id)}
                />
              ))}
            </div>
          </>
        )}

        {currentCardType === "service" && (
          <>
            <ServiceInputCard onCreate={(newCard, file) => handleCreate("services", newCard, file)} isLoading={isLoading} />
            <div className="card-list">
              {cards.service.map((card) => (
                <ServiceCard
                  key={card.id}
                  item={card}
                  onEdit={() => startEditing(card)}
                  onDelete={() => handleDelete("services", card.id)}
                />
              ))}
            </div>
          </>
        )}

        {currentCardType === "about" && (
          <>
            <AboutInputCard onCreate={(newCard, file) => handleCreate("about", newCard, file)} isLoading={isLoading} />
            <div className="card-list">
              {cards.about.map((card) => (
                <AboutCard
                  key={card.id}
                  item={card}
                  onEdit={() => startEditing(card)}
                  onDelete={() => handleDelete("about", card.id)}
                />
              ))}
            </div>
          </>
        )}

        {currentCardType === "home" && (
          <>
            <HomeInputCard onCreate={(newCard, file) => handleCreate("home", newCard, file)} isLoading={isLoading} />
            <div className="card-list">
              {cards.home.map((card) => (
                <HomeCard
                  key={card.id}
                  item={card}
                  onEdit={() => startEditing(card)}
                  onDelete={() => handleDelete("home", card.id)}
                />
              ))}
            </div>
          </>
        )}

        {editingCard && (
          <div className="editing-form">
            <h3>Editing {editingCard.title}</h3>
            <input
              type="text"
              name="title"
              value={updatedData.title || ""}
              onChange={handleUpdateChange}
              placeholder="Update title"
            />
            <input
              type="file"
              name="coverPhoto"
              onChange={handleImageChange}
            />
            <button onClick={handleUpdateSubmit} disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardManager;
