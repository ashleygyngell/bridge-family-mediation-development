import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar is-warning">
        <div className="container">
          <div className="navbar-brand">
            <p>Bridge Family Mediation</p>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/faqs" className="navbar-item">
                FAQs
              </Link>
              <Link to="/aboutus" className="navbar-item">
                About Us
              </Link>
              <Link to="/login" className="navbar-item">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
