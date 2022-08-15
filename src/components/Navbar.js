import React from 'react';
import { Link } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/bfmLogo2.png';

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link to={'/'} className="navbar-item">
          <img
            src={bfmLogo2}
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="auto"
          />
          <span className="ml-1"> </span>
        </Link>
      </div>

      <div className="navbar-end">
        <Link to={'/referralform'} className="navbar-item">
          <button className="button is-info">
            <p className=""> Referral Form</p>
          </button>
        </Link>
        <Link to={'/faqs'} className="navbar-item" id="navbar-item">
          FAQs
        </Link>
        <Link to={'/about'} className="navbar-item" id="navbar-item">
          About Us
        </Link>

        <Link to={'/contact'} className="navbar-item" id="navbar-item">
          Contact Us
        </Link>
      </div>

      <div
        className="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
