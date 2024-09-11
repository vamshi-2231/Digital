import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import CardManager from "../components/Cards/CardManager";
import GalleryCardManager from "../components/Cards/Gallery/GalleryCardManager";
import Auth from "../components/Auth";
import "./Styles/Admin.css";

function AdminPage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentManager, setCurrentManager] = useState("cardManager");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setMessage("Login successful");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await auth.signOut();
      setUser(null);
      setMessage("Signed out successfully.");
    } catch (err) {
      setMessage("Error signing out.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        {message && (
          <div className="message">{message}</div>
        )}
        {user ? (
          <div className="auth-card">
            <p className="welcome-message">Welcome, {user.email}</p>
            <button className="sign-out-button" onClick={handleSignOut} disabled={isLoading}>
              {isLoading ? "Signing Out..." : "Sign Out"}
            </button>
          </div>
        ) : (
          <Auth
            onSignIn={() => {}}
            onSignOut={() => setUser(null)}
          />
        )}
      </header>
      {user && (
        <div className="admin-content">
          <div className="manager-switch">
            <button onClick={() => setCurrentManager("cardManager")}>
              Manage Cards
            </button>
            <button onClick={() => setCurrentManager("galleryCardManager")}>
              Manage Gallery Cards
            </button>
          </div>

          {currentManager === "cardManager" && (
            <CardManager
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              onMessage={(msg) => setMessage(msg)}
            />
          )}

          {currentManager === "galleryCardManager" && (
            <GalleryCardManager
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              onMessage={(msg) => setMessage(msg)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
