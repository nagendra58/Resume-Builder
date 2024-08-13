// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ResumeBuilder.css';

const Home = () => {
    return (
        <div className="resume-builder">
            <div className="container">
                <h1>Resume Builder</h1>
                <div className="image-container">
                    <img 
                        src="https://icon-library.com/images/resume-icon/resume-icon-16.jpg" 
                        alt="resized-image" 
                    />
                </div>
                <h2>Create your professional resume in just minutes</h2>
                <ul className="features">
                    <li>Choose your resume style</li>
                    <li>Fill every box as required</li>
                    <li>Download or print your resume</li>
                </ul>
                <Link to="/template-selection">
                    <button>Build Resume</button>
                </Link>
            </div>
            <footer className="footer">
                &copy; 2024 Resume Builder
            </footer>
        </div>
    );
}

export default Home;
