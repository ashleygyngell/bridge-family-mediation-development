import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const OurFees = () => {
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
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">Our Fees</div>
        <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
          <p>
            At Bridge Mediation, we are committed to offering value for money.
            Costs are made clear at the outset and clients are asked to pay by
            bank transfer in advance of meetings. We do not request funds on
            account and will not present you with a large unexpected bill at the
            end. We are happy to discuss individual circumstances based on your
            ability to pay.{' '}
          </p>

          <strong>
            <u>Fees</u>{' '}
          </strong>
          <bl>
            <li className="ml-4">
              MIAM/Intake Meeting (60 minutes): £120 per person.
            </li>
            <li className="ml-4">
              Joint Mediation Session (90 minutes): £180 per person.
            </li>
            <li className="ml-4">
              We listen to you &#8212; and take great care to make you feel safe
              and comfortable.
            </li>
            <li className="ml-4">
              Memorandum of Understanding or Summary of Proposals: £120 per hour
              per person (normally in the region of 1.5 hours work).
            </li>
            <li className="ml-4">
              Financial Statement: £120 per hour per person (normally in the
              region of 1.5 hours work).
            </li>
          </bl>
          <br />

          <strong>
            <u>Offered free of charge</u>{' '}
          </strong>

          <bl>
            <li className="ml-4">
              Introductory phone call (20 minutes) to discuss your case and
              suitablity for mediation.
            </li>
            <li className="ml-4">
              Letters, emails, telephone calls, where kept to a minimum.
            </li>
            <li className="ml-4">Meeting preparation and session summaries.</li>
          </bl>

          <br />
          <strong>
            <u>Legal Aid</u>
          </strong>

          <p>
            Depending on your income, your mediation costs may be covered by
            Legal Aid. We do not currently offer this but we can refer you to a
            practice with a Legal Aid franchise.
          </p>
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          {/* <Link to={'/whatismediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">What Is Mediation? </p>
          </Link> */}
        </button>

        <button className="faq-button column is-6-mobile ">
          <Link to={'/thevoucherscheme'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">The Voucher Scheme </p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default OurFees;
