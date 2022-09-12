import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhatDoesItCost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <button className="back-button pl-4 pt-1 ">
        <Link to={'/faqs'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> FAQs
          </span>
        </Link>
      </button>
      <body className="columns is-mobile is-tablet pl-6 pr-6 pb-6 pt-1">
        <div className="title mt-6 mr-6 ml-6">What does it cost?</div>
        <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
          <p>
            At Bridge Mediation, we are committed to offering value for money.
            Costs are made clear at the outset and clients are asked to pay by
            bank transfer in advance of meetings. We do not request funds on
            account and will not present you with a large unexpected bill at the
            end. We are happy to discuss individual circumstances based on your
            ability to pay.{' '}
          </p>
          <br />
          <p>
            <strong>Fees </strong>
          </p>
          <bl>
            <li>MIAM/Intake Meeting (60 minutes): £120 per person.</li>
            <li>Joint Mediation Session (90 minutes): £180 per person.</li>
            <li>
              We listen to you &#8212; and take great care to make you feel safe
              and comfortable.
            </li>
            <li>
              Memorandum of Understanding or Summary of Proposals: £120 per hour
              per person (normally in the region of 1.5 hours work).
            </li>
            <li>
              Financial Statement: £120 per hour per person (normally in the
              region of 1.5 hours work).
            </li>
          </bl>
          <br />
          <p>
            <strong>Offered free of charge </strong>
          </p>
          <bl>
            <li>
              Introductory phone call (20 minutes) to discuss your case and
              suitablity for mediation.
            </li>
            <li>Letters, emails, telephone calls, where kept to a minimum.</li>
            <li>Meeting preparation and session summaries.</li>
          </bl>
          <p>
            <br />
            <strong>Legal Aid</strong>
          </p>
          <p>
            Depending on your income, your mediation costs may be covered by
            Legal Aid. We do not currently offer this but we can refer you to a
            practice with a Legal Aid franchise.
          </p>
        </div>
        <div className="faq-buttons-div columns is-mobile">
          <button className="faq-button column is-6-mobile ">
            <Link to={'/whychooseus'}>
              <span>
                <i className="fa-solid fa-arrow-left"></i> Previous
              </span>

              <p className="faq-button-subtitle">Why Choose Us? </p>
            </Link>
          </button>

          <button className="faq-button column is-6-mobile">
            <Link to={'/howdoesitwork'}>
              <span>
                Next <i className="fa-solid fa-arrow-right"></i>{' '}
              </span>

              <p className="faq-button-subtitle">How does it work? </p>
            </Link>
          </button>
        </div>
      </body>
    </>
  );
};

export default WhatDoesItCost;
