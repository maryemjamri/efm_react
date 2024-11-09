// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Event Management</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/formulaire">Formulaire</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Experts1">Experts1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Experts2">Experts2</Link>

          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
