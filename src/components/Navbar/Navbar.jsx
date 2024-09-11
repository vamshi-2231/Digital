import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setIsAdmin(pathname === '/admin');
    setIsGallery(pathname === '/gallery');
  }, [location.pathname]);

  useEffect(() => {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    const toggleButton = document.querySelector('.navbar-toggler');

    const handleClick = () => {
      if (toggleButton) {
        toggleButton.click();
      }
    };

    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleAdminToggle = (event) => {
    event.preventDefault();
    if (isAdmin) {
      setIsAdmin(false);
      navigate('/');
    } else {
      setIsAdmin(true);
      navigate('/admin');
    }
    scrollToTop();
  };

  const handleGalleryToggle = (event) => {
    event.preventDefault();
    if (isGallery) {
      setIsGallery(false);
      navigate('/');
    } else {
      setIsGallery(true);
      navigate('/gallery');
    }
    scrollToTop();
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    window.open('https://api.whatsapp.com/send/?phone=9989742144&text=Let\'s%20Talk', '_blank');
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primary">Ayyappa Digitals</h1>
      </a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarNav">
        <div className="navbar-nav ms-auto py-0">
          <a href="#home" className="nav-item nav-link" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#about" className="nav-item nav-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#services" className="nav-item nav-link" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#projects" className="nav-item nav-link" onClick={(e) => scrollToSection(e, 'project')}>Features</a>
        </div>
        <a href="" className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block">
          <h1 className="text-white">Ayyappa Digitals</h1>
        </a>
        <div className="navbar-nav me-auto py-0">
        <a href="#team" className="nav-item nav-link" onClick={(e) => scrollToSection(e, 'team')}>Team</a>
          <a href="#" className="nav-item nav-link" onClick={handleGalleryToggle}>
            {isGallery ? "NotGallery" : "Gallery"}
          </a>
          <a href="#" className="nav-item nav-link" onClick={handleContactClick}>Contact</a>
        
          <a href="#" className="nav-item nav-link" onClick={handleAdminToggle}>
            {isAdmin ? "NotAdmin" : "Admin"}
          </a>
        </div>
      </div>
    </nav>
  );
}
