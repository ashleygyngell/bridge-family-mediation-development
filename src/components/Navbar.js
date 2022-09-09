import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/bfmLogo2.png';

const Navbar = () => {
  const [openBurger, setOpenBurger] = React.useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  };

  const [navbarText, setNavbarText] = React.useState('null');

  const location = useLocation();

  useEffect(() => {
    setNavbarText(document.getElementById('navbar-title'));
    if (
      location.pathname !== '/' &&
      navbarText === document.getElementById('navbar-title')
    ) {
      navbarText.style.display = 'block';
      console.log('root', navbarText.style.display);
    } else if (
      location.pathname === '/' &&
      navbarText === document.getElementById('navbar-title')
    ) {
      navbarText.style.display = 'none';
      console.log(location.pathname, navbarText.style);
    } else {
      console.log('nothing heppen');
    }
  }, [location, navbarText]);

  return (
    <nav className="navbar is-transparent level ">
      <div className="navbar-brand ">
        <Link to={'/'} className="navbar-item level-item">
          <img src={bfmLogo2} alt="Bridge Family Mediation Logo" width="auto" />
          <span className=""> </span>
          <Link to={'/'}>
            <p id="navbar-title" className="navbar-title level-item pl-2">
              <span>Bridge</span> Family Mediation
            </p>
          </Link>
        </Link>
      </div>
      <a
        role="button"
        className="navbar-burger navbar-end"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBurgerOpen"
        onClick={toggleBurgerMenu}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div
        id="navbarBurgerOpen"
        className={openBurger ? 'navbar-menu is-active' : 'navbar-menu'}
      >
        <div className="navbar-end">
          <Link to={'/'} className="navbar-item" id="navbar-item">
            Home
          </Link>
          <Link to={'/faqs'} className="navbar-item " id="navbar-item">
            FAQs
          </Link>

          <Link to={'/aboutus'} className="navbar-item" id="navbar-item">
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
