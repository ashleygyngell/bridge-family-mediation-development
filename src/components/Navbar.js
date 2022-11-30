import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/bridge-family-mediation-logo.png';

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

const faqs = [
  {
    id: 1,
    header: 'Mediation',
    text: (
      <>
        <Link
          to={'/whatismediation'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          What Is Mediation?
        </Link>

        <Link
          to={'/howitworks'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          How It Works
        </Link>
        <Link
          to={'/whodowehelp'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          Who Do We Help
        </Link>
        <Link
          to={'/whatwediscuss'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          What We Discuss
        </Link>
        <Link
          to={'/childreninmediation'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          Children In Mediation
        </Link>
        <Link
          to={'/divorceandmediation'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          Divorce &amp; Mediation
        </Link>

        <Link
          to={'/aftermediation'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          After Mediation
        </Link>
      </>
    )
  },
  {
    id: 2,
    header: 'About Us',
    text: (
      <>
        <Link
          to={'/ourmediators'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          {' '}
          Our Mediators
        </Link>
        <Link
          to={'/whychooseus'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          Why Choose Us?
        </Link>
      </>
    )
  },
  {
    id: 3,
    header: 'Costs',
    text: (
      <>
        <Link
          to={'/ourfees'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          Our Fees
        </Link>
        <Link
          to={'/thevoucherscheme'}
          className="navbar-item"
          id="navbar-item"
          onClick={closeNav}
        >
          The Voucher Scheme
        </Link>
      </>
    )
  }
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <>
      <>
        {' '}
        <div
          className={`rc-accordion-toggle-mobile   ${
            active === id ? 'active' : ''
          }`}
          onClick={() => handleToggle(id)}
        >
          <p className="navbar-item" id="navbar-item">
            {header} <i className=" fa fa-chevron-down rc-accordion-icon"></i>
          </p>
        </div>
      </>
      <div
        ref={contentEl}
        className={`rc-collapse   ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="rc-accordion-body">
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};

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
      // console.log('error');
    }
  }, [location, navbarText]);

  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <nav id="navbar" className="navbar is-transparent level ">
        <div id="navbar-title" className="navbar-brand is-size-5-mobile">
          <Link
            to={'/'}
            className="navbar-item level-item"
            id="navbar-text-control-background"
          >
            <img
              id="navbar-image"
              src={bfmLogo2}
              alt="Bridge Family Mediation Logo"
              width="auto"
            />

            <Link to={'/'}>
              <div
                id="navbar-title-text"
                className="navbar-title level-item pl-3 "
              >
                <span className="navbar-title-text-responsive">Bridge</span>
                <p className=""> Family Mediation{''}</p>
              </div>
            </Link>
          </Link>
        </div>
        <div className="navbar-overlay" id="navbar-overlay">
          <span className="pr-2 burger-icon" onClick={openNav}>
            &#9776;
          </span>
          <div id="myNav" className="overlay ">
            <a className="closebtn" onClick={closeNav}>
              &times;
            </a>
            <div id="overlay-content" className="overlay-content">
              <div className="">
                <Link
                  to={'/'}
                  className="navbar-item"
                  id="navbar-item"
                  onClick={closeNav}
                >
                  Home
                </Link>
                {faqs.map((faq, i) => {
                  return (
                    <AccordionItem
                      key={i}
                      active={active}
                      handleToggle={handleToggle}
                      faq={faq}
                    />
                  );
                })}
                <Link
                  to={'/contact'}
                  className="navbar-item "
                  id="navbar-item"
                  onClick={closeNav}
                >
                  Contact Us
                </Link>
                <Link to="/does-not-exist"></Link>
              </div>
            </div>
          </div>
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
              <a
                className="navbar-item navbar-dropbown-cursor  "
                id="navbar-item"
              >
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

                <Link
                  to={'/howitworks'}
                  className="navbar-item"
                  id="navbar-item"
                >
                  How It Works
                </Link>
                <Link
                  to={'/whodowehelp'}
                  className="navbar-item"
                  id="navbar-item"
                >
                  Who Do We Help
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
                <Link
                  to={'/divorceandmediation'}
                  className="navbar-item"
                  id="navbar-item"
                >
                  Divorce &amp; Mediation
                </Link>
                {/* ! <hr className="navbar-divider"></hr> */}
                <Link
                  to={'/aftermediation'}
                  className="navbar-item"
                  id="navbar-item"
                >
                  After Mediation
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
    </>
  );
};

export default Navbar;
