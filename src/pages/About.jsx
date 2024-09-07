import React from 'react'

import about_1 from '../assects/about-1.jpg'
import about_2 from '../assects/about-2.jpg'

export default function About() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-3 img-twice position-relative h-100">
                    <div className="col-6">
                        <img className="img-fluid bg-light p-3" src={about_1} alt=""></img>
                    </div>
                    <div className="col-6 align-self-end">
                        <img className="img-fluid bg-light p-3" src={about_2} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="h-100">
                    <p className="text-primary text-uppercase mb-2">About Us</p>
                    <h1 className="display-6 mb-4">We Are Creative And Professional Photographer</h1>
                    <p>A digital studio is a creative team that makes websites, apps, graphics, and animation</p>
                    <p>A digital studio is a creative team that makes websites, apps, graphics, and animation</p>
                    <div className="row g-2 mb-4">
                        <div className="col-sm-6">
                            <i className="fa fa-check text-primary me-3"></i>Quality Products
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-check text-primary me-3"></i>Custom Products
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-check text-primary me-3"></i>Online Order
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-check text-primary me-3"></i>Home Delivery
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5" href="https://jsdl.in/DT-9948MMEL">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
