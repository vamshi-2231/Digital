import React from 'react'
import team_1 from '../assects/team-1.jpg'
import team_2 from '../assects/team-2.jpg'
import team_3 from '../assects/team-3.jpg'
import team_4 from '../assects/team-4.jpg'

export default function Team() {
  return (
    <div className="container-xxl px-0 py-5">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
        <p className="text-primary text-uppercase mb-2">Our Team</p>
        <h1 className="display-6 mb-0">Creative Photograher And Videographer</h1>
    </div>
    <div className="row g-0">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 flex-sm-row">
                <div className="col-sm-6">
                    <div className="team-img position-relative">
                        <img className="img-fluid" src={team_1} alt=""></img>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="h-100 p-5 d-flex flex-column justify-content-between">
                        <div className="mb-3">
                            <h4>Nallagonda Dileep</h4>
                            <span>Photographer</span>
                        </div>
                        <p>Photography expert capturing moments with precision and creativity, turning memories into timeless art. 📷✨</p>
                        <div className="d-flex">
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-0 flex-sm-row-reverse flex-lg-row">
                <div className="col-sm-6">
                    <div className="team-img position-relative">
                        <img className="img-fluid" src={team_2} alt=""></img>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="h-100 p-5 d-flex flex-column justify-content-between">
                        <div className="mb-3">
                            <h4>Nallagonda Akhil</h4>
                            <span>Videographer</span>
                        </div>
                        <p>Video guru crafting compelling visual stories with expertise in filming, editing, and storytelling. 🎥✨</p>
                        <div className="d-flex">
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-0 flex-lg-row-reverse">
                <div className="col-sm-6">
                    <div className="team-img position-relative">
                        <img className="img-fluid" src={team_3} alt=""></img>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="h-100 p-5 d-flex flex-column justify-content-between">
                        <div className="mb-3">
                            <h4>Mamindla Vamshi</h4>
                            <span>Retoucher</span>
                        </div>
                        <p> Image maestro sculpting visual perfection, excelling in precision editing and color transformation 📸✨</p>
                        <div className="d-flex">
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-0 flex-sm-row-reverse">
                <div className="col-sm-6">
                    <div className="team-img position-relative">
                        <img className="img-fluid" src={team_4} alt=""></img>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="h-100 p-5 d-flex flex-column justify-content-between">
                        <div className="mb-3">
                            <h4>Burra Manaswini</h4>
                            <span>Editor</span>
                        </div>
                        <p>Video virtuoso weaving captivating narratives through adept filming, editing, and storytelling prowess 📸✨</p>
                        <div className="d-flex">
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-primary rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
