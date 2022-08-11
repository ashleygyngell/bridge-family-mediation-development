import React from 'react';
import fmaLogo from '../assets/logos/fmaLogo.png';
import fmcLogo from '../assets/logos/fmcLogo.jpg';

const Footer = () => {
  return (
    <footer className="footer level px-6 has-text-centered ">
      <div className="level-left column is-1">
        <div className="level-item">
          <a>
            <img src={fmaLogo} alt="FMA Logo" width="200" height="200" />
          </a>
          <img src={fmcLogo} alt="FMA Logo" width="60" height="200" />
        </div>
      </div>

      <div className="level-item has-text-black">
        <div className="column is-5">
          Balham | Barnes | Battersea | Chiswick | Clapham | Kew | Putney |
          Richmond | Streatham | Wandsworth | Wimbledon
        </div>
      </div>

      <div className="level-right">
        <div className="level-item">
          <a href="#top" className="level-item  is-size-7 has-text-black">
            <span>Return to top </span>
            <span className="icon">
              <i className="fa fa-circle-arrow-up "></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
