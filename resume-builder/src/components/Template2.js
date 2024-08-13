// src/components/template2/App.js

import React from 'react';
import './App.css'; // CSS file for Template 2

const Template2 = () => {
    return (
        <div className="resume-builder">
            <div className="container">
                <h1>Template 2 Layout</h1>
                <div className="image-container">
                    <img 
                        src={require('C:\Users\hi\Downloads\Screenshot_14-6-2024_8536_localhost.jpeg')} // Adjust the path to the image file accordingly
                        alt="Template 2" 
                    />
                </div>
                <Link to="/template-selection">
                    <button>Back to Templates</button>
                </Link>
            </div>
            <footer className="footer">
                &copy; 2024 Resume Builder
            </footer>
        </div>
    );
};

export default Template2;
