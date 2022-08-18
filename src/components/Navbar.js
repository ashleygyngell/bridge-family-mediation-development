import React from 'react';
import { Link } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/bfmLogo2.png';

const Navbar = () => {
  const [openBurger, setOpenBurger] = React.useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  };

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
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBurgerOpen"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <Link to={'/'}>
        <p id="navbar-title">
          <span>Bridge</span> Family Mediation
        </p>
      </Link>

      <div
        id="navbarBurgerOpen"
        className={openBurger ? 'navbar-menu is-active' : 'navbar-menu'}
      >
        <div className="navbar-end">
          <Link to={'/referralform'} className="navbar-item">
            <button className="button is-info navbar-item">
              <p className=""> Referral Form</p>
            </button>
          </Link>
          <Link to={'/faqs'} className="navbar-item " id="navbar-item">
            FAQs
          </Link>
          <Link to={'/about'} className="navbar-item" id="navbar-item">
            About Us
          </Link>

          <Link to={'/contact'} className="navbar-item" id="navbar-item">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
