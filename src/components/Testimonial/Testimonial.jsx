import React from 'react'

import testimonial_1 from '../../img/testimonial-1.jpg'
import testimonial_2 from '../../img/testimonial-2.jpg'
import testimonial_3 from '../../img/testimonial-3.jpg'
import testimonial_4 from '../../img/testimonial-4.jpg'

export default function Testimonial() {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p className="text-primary text-uppercase mb-2">Client's Review</p>
                <h1 className="display-6 mb-0">More Than 20000+ Customers Trusted Us</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial_1} alt=""></img>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations.</p>
                </div>
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial_2} alt=""></img>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations </p>
                </div>
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial_3} alt=""></img>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations</p>
                </div>
                <div className="testimonial-item bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <img className="flex-shrink-0 rounded-circle border p-1" src={testimonial_4} alt=""></img>
                        <div className="ms-4">
                            <h5 className="mb-1">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                    <p className="mb-0">A digital studio is a creative team that makes websites, apps, graphics, and animations.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
