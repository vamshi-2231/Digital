import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config/firebase";
import AboutInputCard from "./Input_Cards/AboutInputCard";
import ServiceInputCard from "./Input_Cards/ServiceInputCard";
import HomeInputCard from "./Input_Cards/HomeInputCard";
import TeamInputCard from "./Input_Cards/TeamInputCard";
import FeatureInputCard from "./Input_Cards/FeatureInputCard";
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
  const [currentCardType, setCurrentCardType] = useState(null);

  useEffect(() => {
    if (currentCardType) {
      fetchCollectionData(currentCardType);
    }
  }, [currentCardType]);

  const fetchCollectionData = async (collectionName) => {
    setIsLoading(true);
    try {
      const collectionRef = collection(db, collectionName);
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCards((prev) => ({ ...prev, [collectionName]: filteredData }));
    } catch (err) {
      console.error(`Error fetching ${collectionName} data:`, err);
      onMessage(`Error fetching ${collectionName} data.`);
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
      fetchCollectionData(type);
    } catch (err) {
      onMessage(`Error creating ${type}.`);
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
      fetchCollectionData(type);
    } catch (err) {
      onMessage(`Error deleting ${type}.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
                  onDelete={() => handleDelete("team", card.id)}
                  onMessage={onMessage}
                  fetchCollection={() => fetchCollectionData("team")}
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
                  onDelete={() => handleDelete("features", card.id)}
                  onMessage={onMessage}
                  fetchCollection={() => fetchCollectionData("features")}
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
                  onDelete={() => handleDelete("services", card.id)}
                  onMessage={onMessage}
                  fetchCollection={() => fetchCollectionData("services")}
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
                  onDelete={() => handleDelete("about", card.id)}
                  onMessage={onMessage}
                  fetchCollection={() => fetchCollectionData("about")}
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
                  onDelete={() => handleDelete("home", card.id)}
                  onMessage={onMessage}
                  fetchCollection={() => fetchCollectionData("home")}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardManager;
