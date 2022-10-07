import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const WhoDoWeHelp = () => {
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
        <div className="title is-4 mt-2 mr-6 ml-6">Who do we help?</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className=" column mt-4 pl-6 pr-6 pb-6  is-6-desktop is-12-tablet is-12-mobile">
            <img
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
              alt="FMC Child Mediation Logo"
            />
          </div>
          <div className="column pt-5 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text  ">
            <bl>
              <li className="ml-4">
                Separating couples, with or without children — married or
                unmarried.
              </li>
              <li className="ml-4">
                Same-sex couples, whether or not in a marriage or civil
                partnership.
              </li>
              <li className="ml-4">
                Children who are struggling to come to terms with their
                parents&apos; separation and may be finding it hard to get on
                with their parents.
              </li>
              <li className="ml-4">
                Members of the extended family, e.g. grandparents, who may have
                been prevented from seeing their grandchildren.
              </li>
              <li className="ml-4">
                Families in a range of disputes, e.g. adult siblings looking to
                resolve the on-going care of an elderly relative; a parent in
                dispute with a grown-up child.
              </li>
            </bl>
          </div>
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/divorceandmediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">Divorce &amp; Mediation </p>
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
