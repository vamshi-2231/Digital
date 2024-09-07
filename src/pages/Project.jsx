import React from 'react'
import project_1 from '../assects/project-1.jpg'
import project_2 from '../assects/project-2.jpg'
import project_3 from '../assects/project-3.jpg'
import project_4 from '../assects/project-4.jpg'
import project_5 from '../assects/project-5.jpg'
import project_6 from '../assects/project-6.jpg'
import project_7 from '../assects/project-7.jpg'
import project_8 from '../assects/project-8.jpg'
export default function Project() {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="text-primary text-uppercase mb-2">Our Works</p>
            <h1 className="display-6 mb-0">Discover Our Unique And Creative Photoshoot</h1>
        </div>
        <div className="row g-3">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_5} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-5.jpg" data-lightbox="project">
                                Memory
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_1} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-1.jpg" data-lightbox="project">
                                Wedding
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_2} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-2.jpg" data-lightbox="project">
                                Portrait
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_6} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-6.jpg" data-lightbox="project">
                                Travel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_7} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-7.jpg" data-lightbox="project">
                                Wedding
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_3} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-3.jpg" data-lightbox="project">    
                                Memory
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_4} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-4.jpg" data-lightbox="project">
                                Fashion
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="project-item">
                            <img className="img-fluid" src={project_8} alt=""></img>
                            <a className="project-title h5 mb-0" href="img/project-8.jpg" data-lightbox="project">
                                Portrait
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
