import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="title">
        <p className="fadeInOnLoad">
          <span>Bridge</span> Family Mediation
        </p>
      </section>

      <section className="hero is-success hero-background full-height">
        <div className="columns has-text-centered">
          <div className="column">
            <Link to={'/faqs'}>
              <button className="button is-info">Why choose Mediation?</button>
            </Link>
          </div>
          <div className="column">
            <button className="button is-info">See how we can help</button>
          </div>
          <div className="column">
            <button className="button is-info">What is mediation?</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
