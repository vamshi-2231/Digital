// src/Spinner.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Spinner() {
  return (
    <div id="spinner" className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white" style={{ zIndex: 9999 }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
