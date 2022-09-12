import React from 'react';
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../YoutubeEmbed.js';
import { useEffect } from 'react';

const HowMediationWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <button className="back-button pl-4 pt-1   ">
        <Link to={'/faqs'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> FAQs
          </span>
        </Link>
      </button>

      <body className=" columns is-mobile is-tablet pl-6 pr-6 pb-6 pt-1 ">
        <div className="title mt-6 mr-6 ml-6">How does it work?</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-0 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              Family Mediation is a voluntary process, where separating or
              divorcing couples come together to have a discussion &#8212; not
              an argument &#8212; about their future arrangements, in a safe,
              well-ordered and professional environment.
            </p>
            <br />
            <p>
              Whilst we will guide you through the process and ask you to
              consider possible options, mediators are completely impartial. We
              are not there to make decisions for you but to help both of you
              resolve the issues and decide your own arrangements for your
              future.
            </p>
            <br />
            <p>
              Mediation does not replace legal advice and you are separately
              encouraged to ask a solicitor to look at any agreement reached at
              mediation to get their legal opinion.
            </p>
            <br />
            <p>
              Mediation is also a confidential process, which means you are free
              to explore all options, safe in the knowledge that if mediation
              does not work, the court is not entitled to hear about the
              discussions that took place, so that they won&#39;t prejudice any
              future legal proceedings.
            </p>
          </div>
          <div className=" column is-6-desktop is-12-tablet is-12-mobile pt-2 pb-6 ">
            <YoutubeEmbed />
          </div>
        </div>
        <div className="faq-buttons-div columns is-mobile">
          <button className="faq-button column is-6-mobile ">
            <Link to={'/whatdoesitcost'}>
              <span>
                <i className="fa-solid fa-arrow-left  "></i> Previous
              </span>

              <p className="faq-button-subtitle">What does it cost? </p>
            </Link>
          </button>

          <button className="faq-button column is-6-mobile ">
            <Link to={'/whatismediation'}>
              <span>
                Next <i className="fa-solid fa-arrow-right "></i>{' '}
              </span>

              <p className="faq-button-subtitle">What is mediation? </p>
            </Link>
          </button>
        </div>
      </body>
    </>
  );
};

export default HowMediationWorks;
