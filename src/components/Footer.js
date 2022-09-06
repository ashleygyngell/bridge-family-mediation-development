import React from 'react';
import { Link } from 'react-router-dom';
import fmaLogo from '../assets/logos/fmaLogo.png';

const Footer = () => {
  const title = document.querySelector('title-hero');
  const navbar = document.getElementById('navbar-title');

  // if (title) {
  //   console.log('titlehere');
  // } else {
  //   navbar.style.display = 'block';
  // }
  // Need to add poscasts and contact email to the bottom, aswell as important resources.
  return (
    <>
      <footer className="footer columns has-text-centered is-size-6 ">
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

        <div className="container footer-inner">
          <div className="columns is-multiline is-flex-tablet is-flex-mobile">
            <div className="column is-3 is-6-mobile">
              <div className="footer-group">
                <h4>About</h4>
                <ul>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-3 is-6-mobile">
              <div className="footer-group">
                <h4>Discover</h4>
                <ul>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-3 is-6-mobile">
              <div className="footer-group">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column is-3 is-6-mobile">
              <div className="footer-group">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                  <li>
                    <a>Some Link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-img" role="presentation">
          <img
            src="https://s3-media0.fl.yelpcdn.com/assets/public/footer_cityscape.yji-573fa19c843556eac5a998fc6d1f80f8.png"
            alt=""
          />
        </div>
        <div className="container copyright">
          <div className="has-text-centered">
            <span>© 20202021 SomeCo, Inc. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
