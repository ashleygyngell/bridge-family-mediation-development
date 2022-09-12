import React from 'react';
import { Link } from 'react-router-dom';
import fmaLogo from '../assets/logos/fmaLogo.png';

const Footer = () => {
  // Need to add poscasts and contact email to the bottom, aswell as important resources.
  return (
    <>
      <footer id="footer" className="footer">
        {/* <div className=" column is-2">
          <div className="footer-image-1 ">
            <a href="https://thefma.co.uk/" target="_blank" rel="noreferrer">
              <img src={fmaLogo} alt="FMA Logo" />
            </a>
          </div>
        </div>

        <div className=" is-size-6">
          <div className="column is-6">
            Balham | Barnes | Battersea | Chiswick | Clapham | Kew | Putney |
            Richmond | Streatham | Wandsworth | Wimbledon
          </div>
        </div>

        <div className="column is-4" id="footer-link">
          <div id="footer-links-container">
            <ul>
              <li>
                <Link to={'/podcasts'}>
                  <i className="fa-solid fa-microphone"></i> Podcast
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@bridgefamilymediation.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>{' '}
                  info@bridgefamilymediation.co.uk
                </a>
              </li>
              <li>
                <Link to={'/usefullinks'}>
                  <i className="fa-solid fa-circle-info"></i> Useful Links
                </Link>
              </li>
              <li>
                <Link to={'/privacypolicy'}>
                  <i className="fa-solid fa-lock"></i> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

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

        <div className="container footer-inner ">
          <div className="columns is-multiline is-flex-tablet is-flex-mobile level">
            <div className="column is-3-desktop is-12-tablet is-12-mobile">
              <div className="footer-group level-item ">
                <div className="footer-image-1 ">
                  <a
                    href="https://thefma.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fmaLogo} alt="FMA Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-6-desktop is-12-tablet is-12-mobile">
              <div className="footer-group  level-item has-text-centered">
                <div className="">
                  Balham | Barnes | Battersea | Chiswick | Clapham | Kew{' '}
                  <br></br>
                  Putney | Richmond | Streatham | Wandsworth | Wimbledon
                </div>
              </div>
            </div>

            <div className="column is-3-desktop is-12-tablet is-12-mobile">
              <div id="footer links" className="footer-group level-item">
                <ul>
                  <Link to={''}>
                    {/* <i className="fa-solid fa-microphone"></i>  */}
                    Podcast
                  </Link>

                  <li>
                    <Link to={'/usefullinks'}>
                      {/* <i className="fa-solid fa-circle-info"></i> */}
                      Useful Links
                    </Link>
                  </li>
                  <li>
                    <Link to={'/'}>
                      {/* <i className="fa-solid fa-lock"></i> */}
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <a
                      href="mailto:info@bridgefamilymediation.co.uk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <i className="fa-solid fa-envelope"></i> */}
                      <span> </span>info@bridgefamilymediation.co.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container copyright ">
              <div className="has-text-centered">
                <p>© 2022 Bridge Family Mediation</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
