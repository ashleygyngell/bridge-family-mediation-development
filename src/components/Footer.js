import React from 'react';
import fmaLogo from '../assets/logos/fmaLogo.png';
import fmcLogo from '../assets/logos/fmcLogo.jpg';

const Footer = () => {
  // Need to add poscasts and contact email to the bottom, aswell as important resources.
  return (
    <>
      <footer className="footer level has-text-centered ">
        <div className="level-left column is-1">
          <div className="level-item" id="footer-images">
            <div className="footer-image-1 ">
              <a href="https://thefma.co.uk/" target="_blank" rel="noreferrer">
                <img src={fmaLogo} alt="FMA Logo" />
              </a>
            </div>

            <div className="footer-image-2 ">
              <a
                href="https://www.familymediationcouncil.org.uk/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fmcLogo} alt="FMC Logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="level-item is-size-6 has-text-black">
          <div className="column is-6">
            Balham | Barnes | Battersea | Chiswick | Clapham | Kew | Putney |
            Richmond | Streatham | Wandsworth | Wimbledon
          </div>
        </div>

        <div className="level-right">
          <div className="level-item ">
            <a href="#top" className="level-item is-size-6 has-text-black">
              <span>Return to top </span>
              <span className="icon">
                <i className="fa fa-circle-arrow-up "></i>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
