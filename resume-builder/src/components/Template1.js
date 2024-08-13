// src/components/template1/App.js

import React from 'react';
import './App.css'; // CSS file for Template 1

const Template1 = () => {
    return (
        <div className="resume-builder">
            <div className="container">
                <h1>Template 1 Layout</h1>
                <div className="image-container">
                    <img 
                        src={require('C:\Users\hi\Downloads\Screenshot_14-6-2024_8590_localhost.jpeg')} // Adjust the path to the image file accordingly
                        alt="Template 1" 
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

export default Template1;
