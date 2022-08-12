import React from 'react';
import { Link } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/bfmLogo2.png';

const Navbar = () => {
  return (
    <nav className="navbar is-warning">
      <div className="navbar-brand">
        <Link to={'/'} className="navbar-item">
          <img
            src={bfmLogo2}
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="auto"
          />
        </Link>
        {/* <a className="navbar-item" href="../">
          <img
            src={bfmLogo2}
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="auto"
          />
        </a> */}
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <Link to={'/referralform'} className="navbar-item">
            <button className="button is-success">Referral Form</button>
          </Link>
          <Link to={'/about'} className="navbar-item">
            About Us
          </Link>
          <Link to={'/faqs'} className="navbar-item">
            FAQs
          </Link>
          <Link to={'/contact'} className="navbar-item">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
