import React from 'react'

export default function Vedio() {
  return (
    <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content rounded-0">
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {/* <!-- 16:9 aspect ratio --> */}
                <div className="ratio ratio-16x9">
                    <iframe 
                        className="embed-responsive-item" 
                        src="https://www.youtube.com/embed/bHd_CwL2bqY?si=ufWbZvXlb8Mslzlm" 
                        id="video" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}
