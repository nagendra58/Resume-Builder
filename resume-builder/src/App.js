import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TemplateSelection from './components/TemplateSelection';
import Template1 from './components/template1/App'; // Importing template 1 layout
import Template2 from './components/template2/App'; // Importing template 2 layout

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/template-selection" element={<TemplateSelection />} />
                <Route path="/template1" element={<Template1 />} />
                <Route path="/template2" element={<Template2 />} />
            </Routes>
        </Router>
    );
};

export default App;
