import React from 'react';
import { Link } from 'react-router-dom';
import fmaLogo from '../assets/logos/fmaLogo.png';

const Footer = () => {
  // Need to add poscasts and contact email to the bottom, aswell as important resources.
  return (
    <>
      <footer className="footer level has-text-centered ">
        <div className="level-left column">
          <div className="level-item" id="footer-images">
            <div className="footer-image-1 ">
              <a href="https://thefma.co.uk/" target="_blank" rel="noreferrer">
                <img src={fmaLogo} alt="FMA Logo" />
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

        <div className="level-item is-size-7 has-text-black">
          <div className="columns">
            <div className="level-right column">
              <Link to={'/podcasts'}>
                <div>
                  <span>
                    <i className="fa-solid fa-microphone"></i>
                  </span>
                  <span> Podcast </span>
                </div>
              </Link>
              <a
                href="mailto:info@bridgefamilymediation.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span> info@bridgefamilymediation.co.uk </span>
                </div>
              </a>
              <Link to={'/usefullinks'}>
                <div>
                  <span>
                    <i className="fa-solid fa-circle-info"></i>
                  </span>
                  <span> Useful Links </span>
                </div>
              </Link>

              <Link to={'/privacypolicy'}>
                <div>
                  <span>
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <span> Privacy Policy</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="level-right">
          <div className="level-item ">
            <a href="#top" className="level-item is-size-6 has-text-black">
              <span>Return to top </span>
              <span className="icon">
                <i className="fa fa-circle-arrow-up "></i>
              </span>
            </a>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
