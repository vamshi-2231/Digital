import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './Style.css';

import Navbar from './components/Navbar/Navbar';
import Spinner from './components/Navbar/Spinner';
import Home from './pages/Home';
import Vedio from './components/Vedio/Vedio';
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import Team from './pages/Team';
import Facts from './pages/Facts';
import Footer from './components/Footer/Footer';
import './components/Styles/custom.scss';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Album from './pages/Album';


function StaticPages() {
  return (
    <>
        <Navbar />
        <div id="home"><Home /></div>
        <div id="video"><Vedio /></div>
        <div id="about"><About /></div>
        <div id="facts"><Facts /></div>
        <div id="services"><Services /></div>
        <div id="project"><Project /></div>
        <div id="team"><Team /></div>
        <Footer />
    </>
  );
}

function AdminRoute() {
  return (
    <>
      <Navbar /> {/* Dynamic Navbar */}
      <Admin /> {/* AdminPage should be the only page */}
      <Footer /> {/* Dynamic Footer */}
    </>
  );
}

function GalleryRoute() {
  return (
    <>
      <Gallery /> {/* AdminPage should be the only page */}
    </>
  );
}
function AlbumRoute() {
  return (
    <>
      <Album /> {/* AdminPage should be the only page */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route path="/admin" element={<AdminRoute />} />

         {/* Gallery Route */}
        <Route path="/gallery" element={<GalleryRoute />} />

        
         {/* Album Route */}
         <Route path="/gallery/album/:id" element={<AlbumRoute />} />


        
        {/* Static Pages Route */}
        <Route path="/" element={<StaticPages />} />
        
        {/* Catch all other routes and show Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
