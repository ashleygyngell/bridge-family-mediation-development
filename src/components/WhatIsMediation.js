import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhatIsMediation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <button className="back-button pl-4 pt-1 ">
        <Link to={'/'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> Home
          </span>
        </Link>
      </button> */}
      <body className="columns is-mobile is-tablet pl-6 pr-6 pb-6 pt-1">
        <div className="title mt-6 mr-6 ml-6">What Is Mediation?</div>
        <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text ">
          <p>
            I have a special interest in child development and working with
            families to prioritise the emotional wellbeing of their children.
            After a long first career in the media, managing a team of creative
            people, much of my professional experience has been about helping
            people work together, resolve conflict and fulfil their potential.{' '}
          </p>{' '}
          <br></br>
          <p>
            Since qualifying as a family mediator, I have been able to use these
            skills to guide people through separation and divorce, to try and
            minimise the distress of this challenging time and reach fair and
            lasting agreements. I am committed to helping families, however
            complex their situation, resolve matters sensitively, swiftly and
            affordably.
          </p>
        </div>
      </body>
    </>
  );
};

export default WhatIsMediation;
