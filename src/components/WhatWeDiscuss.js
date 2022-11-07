import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import moneyImage from '../assets/images/stock-photo-separate-money-and-assets-during-divorce-dividing-finances-2194799095-transformed.jpeg';

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
        <div className="title is-4 mt-2 mr-6 ml-6 ">What we discuss</div>

        <div className="columns pt-0 pr-6 pl-4 ">
          <div className="column mt-5 pl-6 pr-6 pb-0 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <bl>
              <li className="ml-4">
                How property, pensions, other financial assets and debts are to
                be divided up and where both parties will live following
                divorce.
              </li>
              <li className="ml-4">
                Living arrangements for both parties after separation.
              </li>
              <li className="ml-4">
                Where the children will live when parents have separate homes.
              </li>
              <li className="ml-4">
                How the costs of bringing up children will be covered.
              </li>
              <li className="ml-4">
                How the children will share their time between their parents,
                including holidays.
              </li>
              <li className="ml-4">
                Arrangements for children to see members of their extended
                family &mdash; eg grandparents, cousins etc.
              </li>
              <li className="ml-4">
                How parents will communicate with one another in the future
                about their children.
              </li>
              <li className="ml-4">
                How to formalise any mediation agreements in a Separation Deed
                or a Consent Order.
              </li>
              <li className="ml-4">
                A Parenting Plan to set out arrangements for children and
                decisions about their future.
              </li>
            </bl>
          </div>
        </div>
        <div className="column pl-6 pr-6">
          <div className=" column pt-0 pl-6 pr-6 pb-2  is-12-desktop is-12-tablet is-12-mobile has-text-centered">
            <img
              id="mediation-breakdown-image-style-2"
              src={moneyImage}
              alt="Money being divided"
              width="auto"
            />
          </div>
        </div>
      </div>

      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/whodowehelp'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">Who Do We Help </p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          <Link to={'/childreninmediation'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">Children In Mediation </p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default WhatWeDiscuss;
