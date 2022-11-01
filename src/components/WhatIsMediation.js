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
      <div className="content  ">
        <div className="title is-4 mt-2 mr-6 ml-6">What is mediation?</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text ">
            <p>
              Family Mediation is highly successful in helping couples resolve
              the difficult issues arising from separation or divorce.
            </p>
            <p>
              When families break up, important decisions have to be made.
              Mediation offers a safe, professional and reassuring space, where
              you can talk freely and confidentially to settle your differences
              over money, property and arrangements for your children.
            </p>
            <p>
              Mediators do not take sides. We make sure your discussions are
              calm, balanced and fair. We don&#39;t tell you what to do but will
              guide you through a range of options, to help you make your own
              decisions.
            </p>
            <p>
              Mediation works alongside the family justice system and is now the
              preferred method of resolving family disputes. Even the most
              challenging issues can be resolved in mediation, avoiding the need
              for a lengthy court process.
            </p>
            <p>
              We are also qualified to see children aged 10 and over within
              mediation. This can be extremely valuable in helping parents make
              the right decisions for their children. It gives children an
              opportunity to express their views and have some say in the
              arrangements that are being made for them.
            </p>
            <p>
              Mediation helps all concerned move forward feeling stronger and
              more at peace with their new family circumstances.
            </p>
          </div>
          <div className=" column  mt-4 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile">
            <img
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
              alt="FMC Child Mediation Logo"
            />
          </div>
        </div>
        <div className="faq-buttons-div columns is-mobile">
          <button className="faq-button column is-6-mobile ">
            {/* <Link to={'/whatdoesitcost'}>
              <span>
                <i className="fa-solid fa-arrow-left  "></i> Previous
              </span>

              <p className="faq-button-subtitle">What does it cost? </p>
            </Link> */}
          </button>

          <button className="faq-button column is-6-mobile ">
            <Link to={'/howitworks'}>
              <span>
                Next <i className="fa-solid fa-arrow-right "></i>{' '}
              </span>

              <p className="faq-button-subtitle">How It Works </p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatIsMediation;
