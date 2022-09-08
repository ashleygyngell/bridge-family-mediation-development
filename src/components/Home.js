import React from 'react';
import { Link } from 'react-router-dom';

// Homepage needs new photo background and liscenced.
const Home = () => {
  // const navbar = document.getElementById('navbar-title');
  // navbar.style.display = 'none';
  return (
    <>
      <section className="title-hero">
        <p className="fadeInOnLoad">
          <span>Bridge</span> Family Mediation
        </p>
      </section>

      <section className="hero hero-background full-height">
        <div className="hero-text-over-photo fadeInOnLoad2">
          <p>Are you going through a divorce or separation? </p>
          <p>Let us help.</p>
        </div>
        <div className="columns has-text-centered">
          <div className="column">
            <Link to={'/whatismediation'}>
              <button id="button" className="button is-warning">
                What is Mediation?
              </button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/howdoesitwork'}>
              <button id="button" className="button is-warning">
                How it works
              </button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/aboutus'}>
              <button id="button" className="button is-warning">
                About us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
