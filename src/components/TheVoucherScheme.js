import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import contractImage from '../assets/images/stock-photo-wife-and-husband-signing-divorce-documents-or-premarital-agreement-488122756-transformed.jpeg';

const TheVoucherScheme = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">The Voucher Scheme</div>
        <div className="columns  pr-4 pl-4 ">
          <div className="column mt-5 pl-6 pr-6 pb-0 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              The Mediation Voucher Scheme is a one-off financial contribution
              of up to £500, introduced by the government in March 2021 to help
              people with their mediation costs.
            </p>
            <p>The Voucher Scheme isn&apos;t means tested.</p>
            <p>
              At the MIAM, the mediator will discuss whether your case is
              eligible for the Voucher Scheme.
            </p>
            <p>
              Not all cases are eligible under the scheme. The case has to
              involve issues related to children, ie:
            </p>
            <ul>
              <li className="ml-4">a dispute/application regarding a child.</li>
              <li className="ml-4">
                a dispute/application regarding family financial matters where
                the parties are also involved in a dispute/application relating
                to a child.
              </li>
            </ul>
            <br />
            <p>
              The money <strong>will not</strong> cover the cost of a MIAM, only
              the following joint mediation session/s.
            </p>
            <p>
              The mediator will forward you a consent form and you will be asked
              to confirm that you have:
            </p>
            <ul>
              <li className="ml-4">
                asked the mediator to apply for the voucher.
              </li>
              <li className="ml-4">
                not already applied for another voucher as part of the same
                scheme.
              </li>
              <li className="ml-4">
                given consent to your mediator to provide your information to
                the Family Mediation Council, including your name and some basic
                information about your case.
              </li>
            </ul>
            <br />
            <p>
              The voucher is intended to be a contribution towards mediation,
              not necessarily to cover the whole cost.{' '}
            </p>
            <p>
              At Bridge Family Mediation, the voucher will cover 1-2 joint
              meetings. You may need to contribute additional funds, in order to
              complete the process.
            </p>
          </div>
        </div>
        <div className=" column is-12-desktop is-12-tablet is-12-mobile mt-4 pl-6 pr-6 pb-6 has-text-centered ">
          <img
            id="mediation-breakdown-image-style-2"
            src={contractImage}
            alt="Wife and husband signing divorce documents  "
          />{' '}
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/ourfees'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Our Fees
            </span>

            <p className="faq-button-subtitle">What Is Mediation? </p>
          </Link>
        </button>
        {/* Do not remove  */}
        <button className="faq-button column is-6-mobile ">
          {/* <Link to={'/thevoucherscheme'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">The Voucher Scheme </p>
          </Link> */}
        </button>
      </div>
    </>
  );
};

export default TheVoucherScheme;
