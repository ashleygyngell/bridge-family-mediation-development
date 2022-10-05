import React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhyChooseUs = () => {
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
        <div className="title is-4 mt-4 mr-6 ml-6">Why Choose Us</div>
        <div className="column ml-5 mr-6 pt-5 pl-6 pr-6 pb-5 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
          <bl c>
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
        <div className="column is-12-desktop is-12-tablet is-12-mobile  pt-0 pl-6 pr-6 pb-6 has-text-centered">
          <img
            id="mediation-breakdown-image"
            src="https://thumbs.dreamstime.com/b/happy-confident-diverse-old-young-business-people-stand-together-office-smiling-multiethnic-professional-colleagues-staff-161595812.jpg"
            alt="Group Photo"
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
