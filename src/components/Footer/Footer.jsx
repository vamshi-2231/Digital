import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid footer position-relative bg-dark text-white-50 mt-5 py-5 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="row g-5 py-5">
        <div className="col-lg-6 pe-lg-5">
            <a href="index.html" className="navbar-brand">
                <h1 className="display-5 text-primary">Ayyappa Digitals</h1>
            </a>
            <p>A digital studio is a creative team that makes websites, apps, graphics, and animations.</p>
            <p><i className="fa fa-map-marker-alt me-2"></i>Ayyappa Digital Studio ,Opp Boys High School ,Jammikunta,Karimnagar,Telangana</p>
            <p><i className="fa fa-phone-alt me-2"></i>+91-9989742144</p>
            <p><i className="fa fa-envelope me-2"></i>info@example.com</p>
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
                    <a className="btn btn-link" href="#about">About Us</a>
                    <a className="btn btn-link" href="#footer">Contact Us</a>
                    <a className="btn btn-link" href="#services">Our Services</a>
                    <a className="btn btn-link" href="#404">Terms & Condition</a>
                    <a className="btn btn-link" href="#about">Support</a>
                </div>
                <div className="col-sm-6">
                    <h4 className="text-light mb-4">Popular Links</h4>
                    <a className="btn btn-link" href="#about">About Us</a>
                    <a className="btn btn-link" href="#Contact">Contact Us</a>
                    <a className="btn btn-link" href="#services">Our Services</a>
                    <a className="btn btn-link" href="#404">Terms & Condition</a>
                    <a className="btn btn-link" href="#about">Support</a>
                </div>
                {/* <div className="col-sm-12">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <div className="w-100">
                        <div className="input-group">
                            <input type="text" className="form-control border-0 bg-secondary" style={{ padding: '20px 30px' }}
                              placeholder="Your Email Address"></input>
                            <button className="btn btn-primary px-4">Sign Up</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
</div>
  )
}

