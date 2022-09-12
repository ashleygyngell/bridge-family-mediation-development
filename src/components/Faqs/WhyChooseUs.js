import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhyChooseUs = () => {
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
        <div className="title mt-6 mr-6 ml-6">Why Choose Us?</div>
        <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
          <bl>
            <li>
              We are a dedicated family mediation practice and wholeheartedly
              believe that mediation, not legal proceedings, is the best way to
              resolve disputes arising out of relationship breakdown.
            </li>
            <li>
              We have mediated many complex and sensitive cases and have
              resolved even the most challenging disputes.
            </li>
            <li>
              We listen to you &#8212; and take great care to make you feel safe
              and comfortable.
            </li>
            <li>
              We are clear and transparent about our fees and offer value for
              money.
            </li>
            <li>
              We all live in South West London and know our local area inside
              out &#8212; and the support services it provides.
            </li>
            <li>
              We have an experienced family solicitor on our mediating team, who
              can provide the most up-to-date legal information.
            </li>
            <li>
              We have your best interests at heart and our mission is to help
              you bridge your differences and reach lasting agreements.
            </li>
          </bl>
        </div>
        <div className="faq-buttons-div columns is-mobile">
          <button className="faq-button column is-6-mobile ">
            <Link to={'/ismediationlegallybinding'}>
              <span>
                <i className="fa-solid fa-arrow-left"></i> Previous
              </span>

              <p className="faq-button-subtitle">
                Is mediation legally binding?{' '}
              </p>
            </Link>
          </button>

          <button className="faq-button column is-6-mobile">
            <Link to={'/whatdoesitcost'}>
              <span>
                Next <i className="fa-solid fa-arrow-right"></i>{' '}
              </span>

              <p className="faq-button-subtitle">What does it cost? </p>
            </Link>
          </button>
        </div>
      </body>
    </>
  );
};

export default WhyChooseUs;
