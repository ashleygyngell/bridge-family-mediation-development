import React from 'react';
import { Link } from 'react-router-dom';
import fmaLogo from '../assets/logos/fmaLogo.png';
import fmcLogo from '../assets/logos/fmcLogo.jpg';

function topFunction() {
  window.scrollTo({ top: 0 });
}

const Footer = () => {
  // Need to add poscasts and contact email to the bottom, aswell as important resources.
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container footer-inner  ">
          <div className="columns is-multiline is-flex-tablet is-flex-mobile level">
            <div className="column is-3-desktop is-12-tablet is-12-mobile">
              <div className="footer-group level-item " id="footer-images">
                <div className="footer-image-2 mr-2">
                  <a
                    href="https://www.familymediationcouncil.org.uk/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fmcLogo} alt="FMC Logo" />
                  </a>
                </div>
                <div className="footer-image-1  ">
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
              {/* <div className="footer-group  level-item has-text-centered">
                <div className="">
                  Balham | Barnes | Battersea | Chiswick | Clapham | Kew{' '}
                  <br></br>
                  Putney | Richmond | Streatham | Wandsworth | Wimbledon
                </div>
              </div> */}
              <div className="footer-group level-item has-text-centered ">
                <p>
                  Based in South West London <br></br>
                  Accepting clients from all geographical areas
                  <br></br> <br></br> In-person / Online
                </p>
              </div>

              {/* <div className="has-text-centered">
                <a
                  href="mailto:info@bridgefamilymediation.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span className="has-text-white">
                    {' '}
                    info@bridgefamilymediation.co.uk
                  </span>
                </a>
              </div> */}
            </div>

            <div className="column is-3-desktop is-12-tablet is-12-mobile pt-5  ">
              <div id="footer links" className="footer-group level-item">
                <ul>
                  <li>
                    <Link to={'/faqs'} onClick={topFunction}>
                      {/* <i className="fa-solid fa-lock"></i> */}
                      FAQ&#39;s
                    </Link>
                  </li>

                  <li>
                    <Link to={'/usefullinks'} onClick={topFunction}>
                      {/* <i className="fa-solid fa-circle-info"></i> */}
                      Useful Links
                    </Link>
                  </li>
                  <li>
                    <Link to={'/testimonials'} onClick={topFunction}>
                      {/* <i className="fa-solid fa-circle-info"></i> */}
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to={'/podcast'} onClick={topFunction}>
                      {/* <i className="fa-solid fa-microphone"></i>  */}
                      Podcast
                    </Link>
                  </li>
                  <br></br>
                  <li>
                    <Link to={'/privacypolicy'} onClick={topFunction}>
                      {/* <i className="fa-solid fa-lock"></i> */}
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={'/complaintspolicy'} onClick={topFunction}>
                      {/* <i className="fa-solid fa-lock"></i> */}
                      Complaints Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container copyright pt-0 ">
            <div className="has-text-centered">
              <p>
                © 2022 Bridge Family Mediation 85 Great Portland Street, London,
                W1W 7LT. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
