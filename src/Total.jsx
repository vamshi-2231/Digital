import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './Style.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';

// // import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css';
// import './lib/animate/animate.min.css'
// import './lib/owlcarousel/assets/owl.carousel.min.css'
// import './lib/lightbox/css/lightbox.min.css'
// import './Style.css'

import about_1 from './img/about-1.jpg'
import about_2 from './img/about-2.jpg'
import hero_1 from './img/hero-1.jpg'
import hero_2 from './img/hero-2.jpg'
import hero_3 from './img/hero-3.jpg'
import hero_4 from './img/hero-4.jpg'
import project_1 from './img/project-1.jpg'
import project_2 from './img/project-2.jpg'
import project_3 from './img/project-3.jpg'
import project_4 from './img/project-4.jpg'
import project_5 from './img/project-5.jpg'
import project_6 from './img/project-6.jpg'
import project_7 from './img/project-7.jpg'
import project_8 from './img/project-8.jpg'
// import service_1 from './img/service-1.jpg'
import service_2 from './img/service-2.jpg'
import service_3 from './img/service-3.jpg'
import service_4 from './img/service-4.jpg'
import team_1 from './img/team-1.jpg'
import team_2 from './img/team-2.jpg'
import team_3 from './img/team-3.jpg'
import team_4 from './img/team-4.jpg'
import testimonial_1 from './img/testimonial-1.jpg'
import testimonial_2 from './img/testimonial-2.jpg'
import testimonial_3 from './img/testimonial-3.jpg'
import testimonial_4 from './img/testimonial-4.jpg'


export default function () {
  return (
    <div> 
        
    
    {/* <!-- Spinner Start --> */}
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" role="status"></div>
    </div>
    // {/* <!-- Spinner End --> */}


    {/* <!-- Navbar Start --> */}
<nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
  <a href="index.html" className="navbar-brand d-block d-lg-none">
    <h1 className="text-primary">Ayyappa Digitals</h1>
  </a>
  <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
    <div className="navbar-nav ms-auto py-0">
      <a href="index.html" className="nav-item nav-link active">Home</a>
      <a href="about.html" className="nav-item nav-link">About</a>
      <a href="service.html" className="nav-item nav-link">Services</a>
    </div>
    <a href="index.html" className="navbar-brand bg-primary py-2 px-4 mx-3 d-none d-lg-block">
      <h1 className="text-white">Ayyappa Digitals</h1>
    </a>
    <div className="navbar-nav me-auto py-0">
      <a href="project.html" className="nav-item nav-link">Projects</a>
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
        <div className="dropdown-menu rounded-0 shadow-sm border-0 m-0">
          <a href="feature.html" className="dropdown-item">Features</a>
          <a href="team.html" className="dropdown-item">Our Team</a>
          <a href="testimonial.html" className="dropdown-item">Testimonial</a>
          <a href="404.html" className="dropdown-item">404 Page</a>
        </div>
      </div>
      <a href="contact.html" className="nav-item nav-link">Contact</a>
    </div>
  </div>
</nav>
{/* <!-- Navbar End --> */}



    {/* <!-- Header Start --> */}
    <div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <p class="text-primary text-uppercase mb-2 animated slideInDown">Welcome To Ayyappa Digitals</p>
                    <p class="display-4 mb-3 animated slideInDown">Where our love for capturing moments meets top-notch photography and videography services. Your memories, our expertise</p>
                    <div class="d-flex align-items-center pt-4 animated slideInDown">
                        <a href="" class="btn btn-primary py-3 px-4 me-5">Explore More</a>
                        <button type="button" class="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/H7rJ2EIyZYU&ab_channel=TipsTelugu" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 class="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img class="img-fluid bg-white p-3 w-100 mb-3" src={hero_1} alt="hero1"></img>
                            <img class="img-fluid bg-white p-3 w-50" src={hero_3} alt=""></img>
                        </div>
                        <div class="col-6">
                            <img class="img-fluid bg-white p-3 w-50 mb-3" src={hero_4} alt=""></img>
                            <img class="img-fluid bg-white p-3 w-100" src={hero_2} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    {/* <!-- Video Modal Start --> */}
    <div class="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Youtube Video</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {/* <!-- 16:9 aspect ratio --> */}
                    <div class="ratio ratio-16x9">
                        <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                            allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Video Modal End --> */}


    {/* <!-- About Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-3 img-twice position-relative h-100">
                        <div class="col-6">
                            <img class="img-fluid bg-light p-3" src={about_1} alt=""></img>
                        </div>
                        <div class="col-6 align-self-end">
                            <img class="img-fluid bg-light p-3" src={about_2} alt=""></img>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <p class="text-primary text-uppercase mb-2">About Us</p>
                        <h1 class="display-6 mb-4">We Are Creative And Professional Photographer</h1>
                        <p>A digital studio is a creative team that makes websites, apps, graphics, and animation</p>
                        <p>A digital studio is a creative team that makes websites, apps, graphics, and animation</p>
                        <div class="row g-2 mb-4">
                            <div class="col-sm-6">
                                <i class="fa fa-check text-primary me-3"></i>Quality Products
                            </div>
                            <div class="col-sm-6">
                                <i class="fa fa-check text-primary me-3"></i>Custom Products
                            </div>
                            <div class="col-sm-6">
                                <i class="fa fa-check text-primary me-3"></i>Online Order
                            </div>
                            <div class="col-sm-6">
                                <i class="fa fa-check text-primary me-3"></i>Home Delivery
                            </div>
                        </div>
                        <a class="btn btn-primary py-3 px-5" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Facts Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p class="text-primary text-uppercase mb-2">Why Choose Us!</p>
                <h1 class="display-6 mb-5">The Leading Photo Studio In Telangana</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="fact-item bg-light text-center h-100 p-5">
                        <h1 class="display-2 text-primary mb-3" data-toggle="counter-up">35</h1>
                        <h4 class="mb-3">Award Winning</h4>
                        <span>A digital studio is a creative team that makes websites, apps, graphics, and animation</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="fact-item bg-light text-center h-100 p-5">
                        <h1 class="display-2 text-primary mb-3" data-toggle="counter-up">45</h1>
                        <h4 class="mb-3">Years Experience</h4>
                        <span>A digital studio is a creative team that makes websites, apps, graphics, and animation</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="fact-item bg-light text-center h-100 p-5">
                        <h1 class="display-2 text-primary mb-3" data-toggle="counter-up">12345</h1>
                        <h4 class="mb-3">Happy Clients</h4>
                        <span>A digital studio is a creative team that makes websites, apps, graphics, and animation</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Facts End --> */}


    {/* <!-- Service Start --> */}
    <div class="container-xxl bg-light py-5 my-5">
        <div class="container py-5">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p class="text-primary text-uppercase mb-2">Our Services</p>
                <h1 class="display-6 mb-4">We Provide Best Professional Services</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column bg-white p-3 pb-0">
                        <div class="position-relative">
                            <img class="img-fluid" src={service_2} alt="Service-1-img"></img>
                            <div class="service-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="fa fa-link text-primary"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h4>Weddings</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column bg-white p-3 pb-0">
                        <div class="position-relative">
                            <img class="img-fluid" src={service_2} alt=""></img>
                            <div class="service-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="fa fa-link text-primary"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h4>Portraits</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item d-flex flex-column bg-white p-3 pb-0">
                        <div class="position-relative">
                            <img class="img-fluid" src={service_3} alt=""></img>
                            <div class="service-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="fa fa-link text-primary"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h4>Fashion</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item d-flex flex-column bg-white p-3 pb-0">
                        <div class="position-relative">
                            <img class="img-fluid" src={service_4} alt=""></img>
                            <div class="service-overlay">
                                <a class="btn btn-lg-square btn-outline-light rounded-circle" href=""><i class="fa fa-link text-primary"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h4>Editorial</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Project Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p class="text-primary text-uppercase mb-2">Our Works</p>
                <h1 class="display-6 mb-0">Discover Our Unique And Creative Photoshoot</h1>
            </div>
            <div class="row g-3">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_5} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-5.jpg" data-lightbox="project">
                                    Memory
                                </a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_1} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-1.jpg" data-lightbox="project">
                                    Wedding
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_2} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-2.jpg" data-lightbox="project">
                                    Portrait
                                </a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_6} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-6.jpg" data-lightbox="project">
                                    Travel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_7} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-7.jpg" data-lightbox="project">
                                    Wedding
                                </a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_3} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-3.jpg" data-lightbox="project">    
                                    Memory
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="row g-3">
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_4} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-4.jpg" data-lightbox="project">
                                    Fashion
                                </a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="project-item">
                                <img class="img-fluid" src={project_8} alt=""></img>
                                <a class="project-title h5 mb-0" href="img/project-8.jpg" data-lightbox="project">
                                    Portrait
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Project End --> */}


    {/* <!-- Team Start --> */}
    <div class="container-xxl px-0 py-5">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p class="text-primary text-uppercase mb-2">Our Team</p>
            <h1 class="display-6 mb-0">Creative Photograher And Videographer</h1>
        </div>
        <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="row g-0 flex-sm-row">
                    <div class="col-sm-6">
                        <div class="team-img position-relative">
                            <img class="img-fluid" src={team_1} alt=""></img>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="h-100 p-5 d-flex flex-column justify-content-between">
                            <div class="mb-3">
                                <h4>Nallagonda Dileep</h4>
                                <span>Photographer</span>
                            </div>
                            <p>Photography expert capturing moments with precision and creativity, turning memories into timeless art. 📷✨</p>
                            <div class="d-flex">
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                <div class="row g-0 flex-sm-row-reverse flex-lg-row">
                    <div class="col-sm-6">
                        <div class="team-img position-relative">
                            <img class="img-fluid" src={team_2} alt=""></img>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="h-100 p-5 d-flex flex-column justify-content-between">
                            <div class="mb-3">
                                <h4>Nallagonda Akhil</h4>
                                <span>Videographer</span>
                            </div>
                            <p>Video guru crafting compelling visual stories with expertise in filming, editing, and storytelling. 🎥✨</p>
                            <div class="d-flex">
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="row g-0 flex-lg-row-reverse">
                    <div class="col-sm-6">
                        <div class="team-img position-relative">
                            <img class="img-fluid" src={team_3} alt=""></img>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="h-100 p-5 d-flex flex-column justify-content-between">
                            <div class="mb-3">
                                <h4>Mamindla Vamshi</h4>
                                <span>Retoucher</span>
                            </div>
                            <p> Image maestro sculpting visual perfection, excelling in precision editing and color transformation 📸✨</p>
                            <div class="d-flex">
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                <div class="row g-0 flex-sm-row-reverse">
                    <div class="col-sm-6">
                        <div class="team-img position-relative">
                            <img class="img-fluid" src={team_4} alt=""></img>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="h-100 p-5 d-flex flex-column justify-content-between">
                            <div class="mb-3">
                                <h4>Burra Manaswini</h4>
                                <span>Editor</span>
                            </div>
                            <p>Video virtuoso weaving captivating narratives through adept filming, editing, and storytelling prowess 📸✨</p>
                            <div class="d-flex">
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}


    {/* <!-- Testimonial Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p class="text-primary text-uppercase mb-2">Client's Review</p>
                <h1 class="display-6 mb-0">More Than 20000+ Customers Trusted Us</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div class="testimonial-item bg-white p-4">
                    <div class="d-flex align-items-center mb-4">
                        <img class="flex-shrink-0 rounded-circle border p-1" src={testimonial_1} alt=""></img>
                        <div class="ms-4">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p class="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations.</p>
                </div>
                <div class="testimonial-item bg-white p-4">
                    <div class="d-flex align-items-center mb-4">
                        <img class="flex-shrink-0 rounded-circle border p-1" src={testimonial_2} alt=""></img>
                        <div class="ms-4">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p class="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations </p>
                </div>
                <div class="testimonial-item bg-white p-4">
                    <div class="d-flex align-items-center mb-4">
                        <img class="flex-shrink-0 rounded-circle border p-1" src={testimonial_3} alt=""></img>
                        <div class="ms-4">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p class="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations</p>
                </div>
                <div class="testimonial-item bg-white p-4">
                    <div class="d-flex align-items-center mb-4">
                        <img class="flex-shrink-0 rounded-circle border p-1" src={testimonial_4} alt=""></img>
                        <div class="ms-4">
                            <h5 class="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p class="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations.</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}


    {/* <!-- Footer Start --> */}
    <div class="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="row g-5 py-5">
            <div class="col-lg-6 pe-lg-5">
                <a href="index.html" class="navbar-brand">
                    <h1 class="display-5 text-primary">Ayyappa Digitals</h1>
                </a>
                <p>A digital studio is a creative team that makes websites, apps, graphics, and animations.</p>
                <p><i class="fa fa-map-marker-alt me-2"></i>Ayyappa Digital Studio ,Opp Boys High School ,Jammikunta,Karimnagar,Telangana</p>
                <p><i class="fa fa-phone-alt me-2"></i>+91-9989742144</p>
                <p><i class="fa fa-envelope me-2"></i>info@example.com</p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-square btn-outline-primary rounded-circle me-2" href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="col-lg-6 ps-lg-5">
                <div class="row g-5">
                    <div class="col-sm-6">
                        <h4 class="text-light mb-4">Quick Links</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Our Services</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Support</a>
                    </div>
                    <div class="col-sm-6">
                        <h4 class="text-light mb-4">Popular Links</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Our Services</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Support</a>
                    </div>
                    <div class="col-sm-12">
                        <h4 class="text-light mb-4">Newsletter</h4>
                        <div class="w-100">
                            <div class="input-group">
                                <input type="text" class="form-control border-0 bg-secondary" style={{ padding: '20px 30px' }}
 placeholder="Your Email Address"></input>
                                <button class="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Copyright Start --> */}
    <div class="container-fluid bg-dark text-white border-top border-secondary px-0">
        <div class="d-flex flex-column flex-md-row justify-content-between">
            <div class="py-4 px-5 text-center text-md-start">
                <p class="mb-0">&copy; <a class="text-primary" href="#">Ayyappa Digitals</a>. All Rights Reserved.</p>
            </div>
            <div class="py-4 px-5 bg-secondary footer-shape position-relative text-center text-md-end">

                <p class="mb-0">Designed by <a class="text-primary fw-bold" href="">Vamshi</a></p>
            </div>
        </div>
    </div>
    {/* <!-- Copyright End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>



    </div>
  )
}
