import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bfmLogo2 from '../assets/logos/bridge-family-mediation-logo.png';

export default class Home extends Component {
  render() {
    return (
      <>
        {' '}
        <section className="title-hero  ">
          <div
            id="logo-home-container"
            className="logo-home-container  fadeInOnLoad has-text-centered"
          >
            <img
              id="logo-home"
              className="logo-home fadeInOnLoad "
              src={bfmLogo2}
              alt="Bridge Family Mediation Logo "
              width="auto"
            />{' '}
            <p id="logo-responsive" className="logo-responsive">
              <span className="logo-responsive-bridge-text">Bridge</span>Family
              Mediation
            </p>
          </div>
        </section>
        <section
          id="hero"
          className="hero hero-background full-height is-tablet"
        >
          <div
            id="has-text-over-photo"
            className="hero-text-over-photo has-text-centered fadeInOnLoad2 "
          >
            <p>Are you going through a divorce or separation? </p>
            <p>We can help.</p>
          </div>

          <div
            className="columns has-text-centered fadeInOnLoad3 "
            id="home-buttons"
          >
            <div className="column">
              <Link to={'/whatismediation'}>
                <button id="button" className="button is-info">
                  What is Mediation
                </button>
              </Link>
            </div>
            <div className="column">
              <Link to={'/ourmediators'}>
                <button id="button" className="button is-info">
                  About Us
                </button>
              </Link>
            </div>
            <div className="column">
              <Link to={'/ourfees'}>
                <button id="button" className="button is-info">
                  What It Costs
                </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}
