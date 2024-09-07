

import React, { useEffect, useState } from 'react';
import WOW from 'wowjs'; // Ensure this is correctly installed
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'; // Updated Swiper styles import

const Scripts = () => {
    const [videoSrc, setVideoSrc] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        // Initialize WOW.js
        new WOW.WOW().init();

        // Scroll event listener
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleVideoPlay = (src) => {
        setVideoSrc(src);
    };

    const handleModalShow = () => {
        const videoElement = document.getElementById('video');
        videoElement.src = `${videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`;
    };

    const handleModalHide = () => {
        const videoElement = document.getElementById('video');
        videoElement.src = videoSrc;
    };

    return (
        <div>
            {/* Spinner Component */}
            <div id="spinner" className="spinner"></div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Back to Top
                </button>
            )}

            {/* Video Modal */}
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" onShow={handleModalShow} onHide={handleModalHide}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Video</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <iframe id="video" src="" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Carousel */}
            <Swiper
                spaceBetween={25}
                slidesPerView={1}
                centeredSlides
                loop
                navigation
                breakpoints={{
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
            >
                <SwiperSlide>
                    {/* Slide Content */}
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
            </Swiper>
        </div>
    );
};

export default Scripts;
