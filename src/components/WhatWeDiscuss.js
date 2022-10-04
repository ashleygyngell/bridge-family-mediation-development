import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhatWeDiscuss = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <button className="back-button pl-4 pt-1 ">
        <Link to={'/'}>
          <div>
            <span>
              <i className="fa-solid fa-arrow-left "></i> Home
            </span>
          </div>{' '}
        </Link>
      </button> */}

      <div className="content  ">
        <div className="title is-3 mt-4 mr-6 ml-6 ">What may be discussed?</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-6  is-6-desktop is-12-tablet is-12-mobile mediator-text">
            <bl>
              <li className="ml-4">
                How property, pensions, other financial assets and debts are to
                be divided up and where both parties will live following divorce
              </li>
              <li className="ml-4">
                Where the children will live when parents separate.
              </li>
              <li className="ml-4">
                How the children will share their time between their parents,
                including holidays.
              </li>
              <li className="ml-4">
                How much children will see of members of their extended family —
                grandparents, cousins etc.
              </li>
              <li className="ml-4">
                How parents will communicate with one another in the future
                about their children.
              </li>
              <li className="ml-4">
                How to formalise any agreements in a Separation Deed or a
                Consent Order.
              </li>
            </bl>
          </div>
          <div className=" column mt-4 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile">
            <img
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
              alt="FMC Child Mediation Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDiscuss;
