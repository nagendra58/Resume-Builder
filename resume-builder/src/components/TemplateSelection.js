// src/components/TemplateSelection.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ResumeBuilder.css';

const TemplateSelection = () => {
    return (
        <div className="resume-builder">
            <div className="container">
                <h1>Template Selection</h1>
                <ul className="template-list">
                    <li>
                        <Link to="/template1">
                            <button>Template 1</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/template2">
                            <button>Template 2</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <footer className="footer">
                &copy; 2024 Resume Builder
            </footer>
        </div>
    );
}

export default TemplateSelection;
