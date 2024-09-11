import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    window.open('https://api.whatsapp.com/send/?phone=9989742144&text=Let\'s%20Talk', '_blank');
  };

  return (
    <>
      <div className="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row g-5 py-5">
          <div className="col-lg-6 pe-lg-5">
            <a href="#home" className="navbar-brand" onClick={(e) => handleScrollToSection(e, 'home')}>
              <h1 className="display-5 text-primary">Ayyappa Digitals</h1>
            </a>
            <p>A digital studio team that excels in taking beautiful photos, creating engaging visuals, and delivering top-notch photography for all your needs.</p>
            <p><i className="fa fa-map-marker-alt me-2"></i>Ayyappa Digital Studio, Opp Boys High School, Jammikunta, Karimnagar, Telangana</p>
            <p><i className="fa fa-phone-alt me-2"></i>+91-9989742144</p>
            <p><i className="fa fa-envelope me-2"></i>srinivasburra1122@gmail.com</p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="row g-5">
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Quick Links</h4>
                <a className="btn btn-link" href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>About Us</a>
                <a className="btn btn-link" href="#" onClick={handleContactClick}>Contact Us</a>
                <a className="btn btn-link" href="#services" onClick={(e) => handleScrollToSection(e, 'services')}>Our Services</a>
                <a className="btn btn-link" href="#">Terms & Conditions</a>
                <a className="btn btn-link" href="#">Support</a>
              </div>
              <div className="col-sm-6">
                <h4 className="text-light mb-4">Popular Links</h4>
                <a className="btn btn-link" href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>About Us</a>
                <a className="btn btn-link" href="#" onClick={handleContactClick}>Contact Us</a>
                <a className="btn btn-link" href="#services" onClick={(e) => handleScrollToSection(e, 'services')}>Our Services</a>
                <a className="btn btn-link" href="#">Terms & Conditions</a>
                <a className="btn btn-link" href="#" onClick={(e) => handleScrollToSection(e, 'about')}>Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white border-top border-secondary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-4 px-5 text-center text-md-start">
            <p className="mb-0">
              &copy; <a className="text-primary" href="#">Ayyappa Digitals</a>. All Rights Reserved.
            </p>
          </div>
          <div className="py-4 px-5 bg-secondary footer-shape position-relative text-center text-md-end">
            <p className="mb-0">
              Designed by <a className="text-primary fw-bold" href="https://vamshi-2231.github.io/portfolio/">Mamindla Vamshi</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
