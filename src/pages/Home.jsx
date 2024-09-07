import React from 'react'
import hero_1 from '../assects/hero-1.jpg'
import hero_2 from '../assects/hero-2.jpg'
import hero_3 from '../assects/hero-3.jpg'
import hero_4 from '../assects/hero-4.jpg'

export default function Home() {
  return (
    <div>
        <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <p className="text-primary text-uppercase mb-2 animated slideInDown">Welcome To Ayyappa Digitals</p>
                    <p className="display-4 mb-3 animated slideInDown">Where our love for capturing moments meets top-notch photography and videography services. Your memories, our expertise</p>
                    <div className="d-flex align-items-center pt-4 animated slideInDown">
                        <a href="https://www.youtube.com/@ayyappadigitals7334" className="btn btn-primary py-3 px-4 me-5">Explore More</a>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/H7rJ2EIyZYU&ab_channel=TipsTelugu" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
                <div className="col-lg-6 animated fadeIn">
                    <div className="row g-3">
                        <div className="col-6 text-end">
                            <img className="img-fluid bg-white p-3 w-100 mb-3" src={hero_1} alt="hero1"></img>
                            <img className="img-fluid bg-white p-3 w-50" src={hero_3} alt=""></img>
                        </div>
                        <div className="col-6">
                            <img className="img-fluid bg-white p-3 w-50 mb-3" src={hero_4} alt=""></img>
                            <img className="img-fluid bg-white p-3 w-100" src={hero_2} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}
