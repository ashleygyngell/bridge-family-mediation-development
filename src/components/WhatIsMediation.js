import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import manAndWomanImage from '../assets/images/stock-photo-psychologist-and-young-marriage-after-successful-marital-therapy-646781635-transformed.jpeg';

const WhatIsMediation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content  ">
        <div className="title is-4 mt-2 mr-6 ml-6">What is mediation?</div>
        <div className="columns pt-5 pr-4 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-0 is-12-desktop is-12-tablet is-12-mobile mediator-text ">
            {/* <strong>
              <u>What is Mediation?</u>
            </strong> */}
            <p>
              Family Mediation is highly successful in helping couples resolve
              the difficult issues arising from separation or divorce.
            </p>
            <p>
              When families break up, important decisions have to be made.
              Mediation offers a safe, professional and reassuring space, where
              you can talk freely and confidentially to settle your differences
              over money, property and arrangements for your children.
            </p>
            <p>
              Mediation works alongside the family justice system and is now
              widely recognised as the preferred method of resolving divorce
              disputes. With the spiralling cost of living and intense pressure
              on the Family Courts, mediation has never made more sense as a way
              of reaching settlements and avoiding a lengthy court process.
            </p>
            <p>
              Family Mediation also gives children aged 10 and over the
              opportunity to express their views and have a say in the
              arrangements that are being made for them. This can be extremely
              valuable in helping parents make the right decisions for their
              children.
            </p>
            <p>
              Mediators do not take sides. We make sure your discussions are
              calm, balanced and fair. We don&apos;t tell you what to do but
              will guide you through a range of options, to help you make your
              own decisions.
            </p>
            <p>
              Mediation can help you find a solution to even the most
              complicated and bitter conflicts and bring about lasting
              agreements, helping you move forward feeling stronger and more at
              peace with your new family circumstances.
            </p>
          </div>
        </div>
        <div className=" column pt-2 pl-6 pr-6 pb-2 is-12-desktop is-12-tablet is-12-mobile has-text-centered">
          <img
            id="mediation-breakdown-image"
            src={manAndWomanImage}
            alt="Young couple glance at each other during a mediation session. "
            width="auto"
          />
        </div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-0 pl-6 pr-6 pb-2  is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>The principles of Mediation</u>
            </strong>
            <p>
              Family mediation is a <strong>voluntary process</strong>, where
              couples going through divorce or separation agree to come together
              to work through their differences around money, property or
              children, guided by an experienced mediator.
            </p>
            <p>
              Mediation is <strong>impartial</strong>. The mediator remains
              neutral, making sure that both parties listen to one another and
              are able to freely express their views.
            </p>
            <p>
              The <strong>power of decision-making </strong>rests with you. The
              mediator will not give you advice or tell you what to do but can
              guide you through possible options to help you reach an outcome
              you are both satisfied with.{' '}
            </p>
            <p>
              Mediation is <strong>confidential</strong>, which means you are
              encouraged to explore a range of options freely and without
              committing yourself to any proposal, safe in the knowledge that if
              mediation were to fail, a record of these discussions could not be
              used to influence any future legal proceedings.{' '}
            </p>
            <p>
              There are two <strong>exceptions to confidentiality</strong>: one
              involves financial information disclosed in mediation, where the
              court is able to call on it and use it in any future legal
              proceedings to reach a judgment. The other is where a mediator is
              concerned that a child is at risk of serious harm and therefore
              has a duty to report it to the appropriate services.
            </p>
          </div>
        </div>

        <div className="faq-buttons-div columns is-mobile">
          {/* Do not remove */}
          <button className="faq-button column is-6-mobile ">
            {/* <Link to={'/whatdoesitcost'}>
              <span>
                <i className="fa-solid fa-arrow-left  "></i> Previous
              </span>

              <p className="faq-button-subtitle">What does it cost? </p>
            </Link> */}
          </button>

          <button className="faq-button column is-6-mobile ">
            <Link to={'/howitworks'}>
              <span>
                Next <i className="fa-solid fa-arrow-right "></i>{' '}
              </span>

              <p className="faq-button-subtitle">How It Works </p>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatIsMediation;
