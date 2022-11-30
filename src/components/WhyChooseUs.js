import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import groupHeadshot from '../assets/images/mediators/group.webp';

const WhyChooseUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content pb-6  ">
        <div className="title is-4 mt-2 mr-6 ml-6">Why Choose Us</div>
        <div className="columns is-multiline pr-4 pl-4">
          <div className="column ml-2 pr-6 mt-2 pl-6  pb-5 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
            <ul>
              <li>
                We are a dedicated family mediation practice and wholeheartedly
                believe that mediation, not legal proceedings, is the best way
                to resolve disputes arising out of relationship breakdown.
              </li>
              <li>
                We have mediated many complex and sensitive cases and have
                resolved even the most challenging disputes.
              </li>
              <li>
                We listen to you &#8212; and take great care to make you feel
                safe and comfortable.
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
                We have an experienced family solicitor on our mediating team,
                who can provide the most up-to-date legal information.
              </li>
              <li>
                We have your best interests at heart and our mission is to help
                you bridge your differences and reach lasting agreements.
              </li>
            </ul>
          </div>
          <div className="column is-12-desktop is-12-tablet is-12-mobile  pt-0 pl-6 pr-6 pb-4 has-text-centered">
            <img
              id="mediation-breakdown-image"
              src={groupHeadshot}
              alt="Group Photo"
            />
          </div>
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/ourmediators'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">Our Mediators</p>
          </Link>
        </button>
        {/* Do not remove */}
        <button className="faq-button column is-6-mobile ">
          {/* <Link to={'/whychooseus'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">Why Choose Us </p>
          </Link> */}
        </button>
      </div>
    </>
  );
};

export default WhyChooseUs;
