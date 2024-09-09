import React from 'react'

import service_1 from '../assects/service-1.jpg'
import service_2 from '../assects/service-2.jpg'
import service_3 from '../assects/service-3.jpg'
import service_4 from '../assects/service-4.jpg'

export default function Services() {
  return (
    <div className="container-xxl bg-light py-5 my-5">
    <div className="container py-5">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="text-primary text-uppercase mb-2">Our Services</p>
            <h1 className="display-6 mb-4">We Provide Best Professional Services</h1>
        </div>
        <div className="row g-3">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                    <div className="position-relative">
                        <img className="img-fluid" src={service_1} alt="Service-1-img"></img>
                        <div className="service-overlay">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle" href="#/Gallery"><i className="fa fa-link text-primary"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <h4>Weddings</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                    <div className="position-relative">
                        <img className="img-fluid" src={service_4} alt=""></img>
                        <div className="service-overlay">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle" href="#/Gallery"><i className="fa fa-link text-primary"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <h4>Portraits</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                    <div className="position-relative">
                        <img className="img-fluid" src={service_3} alt=""></img>
                        <div className="service-overlay">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle" href="#/Gallery"><i className="fa fa-link text-primary"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <h4>Fashion</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item d-flex flex-column bg-white p-3 pb-0">
                    <div className="position-relative">
                        <img className="img-fluid" src={service_2} alt=""></img>
                        <div className="service-overlay">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle" href="#/Gallery"><i className="fa fa-link text-primary"></i></a>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <h4>Editorial</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
