import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import bfmLogo2 from '../assets/logos/bridge-family-mediation-logo.png';
// import BackgroundSlider from 'react-background-slider';

// import aa from '../assets/images/test1.png';
// import aa2 from '../assets/images/test2.png';
// import aa3 from '../assets/images/test3.png';

// Homepage needs new photo background and liscenced.
export default class Home extends Component {
  render() {
    return (
      <>
        {' '}
        <section className="title-hero  ">
          {/* <div className="logo-home-container ">
            {' '} */}

          {/* </div> */}
          <div className="logo-home-container  fadeInOnLoad has-text-centered">
            <img
              className="logo-home fadeInOnLoad pr-5 "
              src={bfmLogo2}
              alt="Bridge Family Mediation Logo "
              width="auto"
            />{' '}
            <p>
              <span className="pr-5">Bridge</span>Family Mediation
            </p>
          </div>
        </section>
        {/* <BackgroundSlider
          images={[aa, aa2, aa3]}
          duration={10}
          transition={2}
        /> */}
        <section className="hero hero-background full-height is-tablet">
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
                <button id="button" className="button is-warning">
                  What is Mediation
                </button>
              </Link>
            </div>
            <div className="column">
              <Link to={'/ourmediators'}>
                <button id="button" className="button is-warning">
                  About Us
                </button>
              </Link>
            </div>
            <div className="column">
              <Link to={'/ourfees'}>
                <button id="button" className="button is-warning">
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
