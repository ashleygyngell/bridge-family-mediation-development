import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/withwhitelogo.png';

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
      navbarText.style.display = 'flex';
    } else if (
      location.pathname === '/' &&
      navbarText === document.getElementById('navbar-title')
    ) {
      navbarText.style.display = 'none';
    } else {
      console.log('nothing heppen');
    }
  }, [location, navbarText]);

  return (
    <nav className="navbar is-transparent level ">
      <div id="navbar-title" className="navbar-brand is-size-5-mobile">
        <Link
          to={'/'}
          className="navbar-item level-item"
          id="navbar-text-control-background"
        >
          <img src={bfmLogo2} alt="Bridge Family Mediation Logo" width="auto" />

          <Link to={'/'}>
            <div
              id="navbar-title-text"
              className="navbar-title level-item pl-3 "
            >
              <span>Bridge</span>
              <p className="pl-3"> Family Mediation{''}</p>
            </div>
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
          <div
            className="navbar-item has-dropdown is-hoverable "
            id="navbar-item-test"
          >
            <a className="navbar-item  " id="navbar-item">
              Mediation
            </a>
            <div className="navbar-dropdown is-boxed " id="navbar-dropdown">
              <Link
                to={'/whatismediation'}
                className="navbar-item"
                id="navbar-item"
              >
                What Is Mediation?
              </Link>
              <Link to={'/howitworks'} className="navbar-item" id="navbar-item">
                How It Works
              </Link>
              <Link
                to={'/divorceandmediation'}
                className="navbar-item"
                id="navbar-item"
              >
                Divorce &amp; Mediation
              </Link>
              <Link to={'/whowehelp'} className="navbar-item" id="navbar-item">
                Who We Help
              </Link>
              <Link
                to={'/whatwediscuss'}
                className="navbar-item"
                id="navbar-item"
              >
                What We Discuss
              </Link>
              <Link
                to={'/childreninmediation'}
                className="navbar-item"
                id="navbar-item"
              >
                Children In Mediation
              </Link>
              {/* <hr className="navbar-divider"></hr> */}
              <Link
                to={'/themediationagreement'}
                className="navbar-item"
                id="navbar-item"
              >
                The Mediation Agreement
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item " id="navbar-item">
              About Us
            </a>
            <div className="navbar-dropdown is-boxed" id="navbar-dropdown">
              <Link
                to={'/ourmediators'}
                className="navbar-item"
                id="navbar-item"
              >
                Our Mediators
              </Link>
              <Link
                to={'/whychooseus'}
                className="navbar-item"
                id="navbar-item"
              >
                Why Choose Us?
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-item " id="navbar-item">
              Costs
            </a>
            <div
              className="navbar-dropdown is-boxed"
              id="navbar-dropdown-right"
            >
              <Link to={'/ourfees'} className="navbar-item" id="navbar-item">
                Our Fees
              </Link>
              <Link
                to={'/thevoucherscheme'}
                className="navbar-item"
                id="navbar-item"
              >
                The Voucher Scheme
              </Link>
            </div>
          </div>
          <Link to={'/contact'} className="navbar-item " id="navbar-item">
            Contact Us
          </Link>
          <Link to="/does-not-exist"></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
