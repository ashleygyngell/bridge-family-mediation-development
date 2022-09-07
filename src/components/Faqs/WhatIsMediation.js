import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhatIsMediation = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="back-button pl-4 pt-1 " onClick={() => navigate(-1)}>
        <span>
          <i className="fa-solid fa-arrow-left "></i> Back
        </span>
      </button>
      <body className="pl-6 pr-6">
        <div className="mediator-text pt-5 pb-5 ">
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
