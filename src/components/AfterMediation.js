import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import childWithFather from '../assets/images/child-with-father.png';

const AfterMediation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <button className="back-button pl-4 pt-1   ">
        <Link to={'/'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> Home
          </span>
        </Link>
      </button> */}

      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">After Mediation</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-3 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              <strong>
                {' '}
                When mediation reaches a successful conclusion, the mediator can
                prepare the following documentation:
              </strong>
            </p>
            1.{' '}
            <u>
              A <strong> Memorandum of Understanding </strong> (or{' '}
              <strong>Summary of Proposals</strong>) and{' '}
              <strong>the Open Financial Statement</strong>
            </u>
            <p>
              The Memorandum of Understanding is your mediation agreement. This
              is drawn up by the mediator once you have reached a financial
              agreement on how your property, pensions and other assets are to
              be divided.
            </p>
            {/* <br /> */}
            <p>
              The MOU is a confidential document and records the proposals
              reached following your mediation discussions. This document is
              then shared with each person&apos;s solicitor, and once each
              person is happy to proceed, one of your solicitors can turn it
              into a legally binding agreement. This will then be presented to
              the Court as a Consent Order before the divorce is made final.
            </p>
            <p>
              The Open Summary Statement of Financial Information is the
              document that records all your financial details as given in your
              Financial Disclosure forms, and on which your mediation agreement
              is based. It is an “open” document because the information
              recorded here must be placed before the Court before your Consent
              Order can be made.
            </p>
            2.{' '}
            <u>
              A <strong> Parenting Plan </strong>
            </u>
            <p>
              Some couples find it helpful to have a written agreement setting
              out how arrangements for the children, such as how they will share
              their time between both parents, how the children&apos;s expenses
              will be met and how holidays will be divided. This plan can cover
              a wide range of other issues, including where the children will go
              to school, whether they will have a religious upbringing and how
              the parents will communicate with one another going forward.
            </p>
            <p>
              In most cases, arrangements for children are kept out of court.
              Couples are encouraged to reach flexible and cooperative shared
              parenting agreements and only in exceptional circumstances to seek
              a Court Order regarding child arrangements.
            </p>
            <br />
            <p>
              <strong>
                There are additional costs for preparing these documents at the
                end of mediation which are set out on our
              </strong>{' '}
              <Link to={'/ourfees'}>Costs</Link> <strong>page.</strong>
            </p>
          </div>
        </div>
        <div className=" column mt-4 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile has-text-centered">
          <img
            id="mediation-breakdown-image"
            src={childWithFather}
            alt="Child with father on bridge"
          />
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/divorceandmediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">Divorce & Mediation </p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          {/* <Link to={'/divorceandmediation'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">Divorce &amp; Mediation </p>
          </Link> */}
        </button>
      </div>
    </>
  );
};

export default AfterMediation;
