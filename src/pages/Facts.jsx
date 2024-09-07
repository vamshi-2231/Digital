import React from 'react'

export default function Facts() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="text-primary text-uppercase mb-2">Why Choose Us!</p>
            <h1 className="display-6 mb-5">The Leading Photo Studio In Telangana</h1>
        </div>
        <div className="row g-3">
            <div className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="fact-item bg-light text-center h-100 p-5">
                    <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">35</h1>
                    <h4 className="mb-3">Award Winning</h4>
                    <span>A digital studio is a creative team that makes websites, apps, graphics, and animation</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="fact-item bg-light text-center h-100 p-5">
                    <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">45</h1>
                    <h4 className="mb-3">Years Experience</h4>
                    <span>A digital studio is a creative team that makes websites, apps, graphics, and animation</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-lg-5 wow fadeInUp" data-wow-delay="0.5s">
                <div className="fact-item bg-light text-center h-100 p-5">
                    <h1 className="display-2 text-primary mb-3" data-toggle="counter-up">12345</h1>
                    <h4 className="mb-3">Happy Clients</h4>
                    <span>A digital studio is a creative team that makes websites, apps, graphics, and animation</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
