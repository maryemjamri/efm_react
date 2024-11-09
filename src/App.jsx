// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update to use Routes and Route
import Evenement from './Evenementlist';

import expertsData from './db';
import Experts1 from './Experts1';
import Formulaire from './Formulaire';
import Experts2 from './Expert2'; 
import Navbar from './Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <div className="container mt-4">
          <Routes> 
            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/Experts1" element={<Experts1 />} />
            <Route path="/Experts2" element={<Experts2 />} />
      
            <Route path="/" element={<h1>Bienvenue sur l'application de gestion des événements</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
