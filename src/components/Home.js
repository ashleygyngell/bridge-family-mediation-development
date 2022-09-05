import React from 'react';
import { Link } from 'react-router-dom';

// const navbar = document.getElementById('navbar-title');
// navbar.style.display = 'none';

// Homepage needs new photo background and liscenced.
const Home = () => {
  return (
    <>
      <section className="title">
        <p className="fadeInOnLoad">
          <span>Bridge</span> Family Mediation
        </p>
      </section>

      <section className="hero is-success hero-background full-height">
        <div className="hero-text-over-photo fadeInOnLoad2">
          <span>Are you going through a divorce or separation? </span> Let us
          help.
        </div>
        <div className="columns has-text-centered">
          <div className="column">
            <Link to={'/faqs'}>
              <button className="button is-info">What is Mediation?</button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/howitworks'}>
              <button className="button is-info">How it works</button>
            </Link>
          </div>
          <div className="column">
            <Link to={'/about'}>
              <button className="button is-info">About us</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
