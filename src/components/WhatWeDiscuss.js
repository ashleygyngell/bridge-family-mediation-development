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
      <body className="columns is-mobile is-tablet pl-6 pr-6 pb-6 pt-1">
        <div className="title  mt-6 mr-6 ml-6 ">What We Discuss</div>

        <div className="column pt-5 pl-6 pr-6 pb-6  is-12-desktop is-12-tablet is-12-mobile mediator-text">
          <div className=" ">
            <bl>
              <li>
                How property, pensions, other financial assets and debts are to
                be divided up and where both parties will live following divorce
              </li>
              <li>Where the children will live when parents separate.</li>
              <li>
                How the children will share their time between their parents,
                including holidays.
              </li>
              <li>
                How much children will see of members of their extended family
                &#8212; grandparents, cousins etc.
              </li>
              <li>
                How parents will communicate with one another in the future
                about their children.
              </li>
              <li>
                How to formalise any agreements in a Separation Deed or a
                Consent Order.
              </li>
            </bl>
          </div>
        </div>
      </body>
    </>
  );
};

export default WhatWeDiscuss;
