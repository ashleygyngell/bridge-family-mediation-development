import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import familyImage from '../assets/images/stock-photo-crop-close-up-of-unhappy-young-couple-sit-separate-have-problems-in-relationship-think-of-breakup-1901549803-transformed.jpeg';

const WhoDoWeHelp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content  ">
        <div className="title is-4 mt-2 mr-6 ml-6">Who do we help?</div>
        <div className="columns is-multiline is-vcentered pt-0 pr-4 pl-4  ">
          <div className="column mt-2 pl-6 pr-6 pb-0 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
            <ul>
              <li className="ml-4">
                Couples (heterosexual and non-heterosexual) going through
                divorce or separation, with or without children &mdash; married,
                in a civil partnership or unmarried.
              </li>
              <li className="ml-4">
                Children who are trying to come to terms with their
                parents&apos; separation and wish to have a say in the decisions
                that are being made for them.
              </li>
              <li className="ml-4">
                Children who may be finding it hard to get on with their parents
                or siblings.
              </li>
              <li className="ml-4">
                Members of the extended family, eg grandparents, who may have
                issues over seeing their grandchildren.
              </li>
              <li className="ml-4">
                Families in a range of disputes: aside from family break-up, we
                also mediate between siblings and extended family members.
              </li>
            </ul>
          </div>
        </div>
        <div className="column pb-6  pl-6 pr-6 is-12-desktop is-12-tablet is-12-mobile has-text-centered">
          <img
            id="mediation-breakdown-image-style-3"
            src={familyImage}
            alt="Family With Daughter"
            width="auto"
          />
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile ">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/howitworks'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">How It Works </p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          <Link to={'/whatwediscuss'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">What We Discuss</p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default WhoDoWeHelp;
