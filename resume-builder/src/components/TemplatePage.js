// src/components/TemplatePage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ResumeBuilder.css';

const TemplatePage = () => {
    const { templateId } = useParams();
    const navigate = useNavigate(); // Updated navigation hook

    const handleBack = () => {
        navigate('/template-selection'); // Navigate back to the selection page
    };

    return (
        <div className="resume-builder">
            <div className="container">
                <h1>Template {templateId}</h1>
                <div className="image-container">
                    <img 
                        src="https://icon-library.com/images/resume-icon/resume-icon-16.jpg" 
                        alt={`Template ${templateId}`} 
                    />
                </div>
                <button onClick={handleBack}>Back to Templates</button>
            </div>
            <footer className="footer">
                &copy; 2024 Resume Builder
            </footer>
        </div>
    );
};

export default TemplatePage;
