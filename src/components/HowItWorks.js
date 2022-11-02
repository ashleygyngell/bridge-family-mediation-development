import React from 'react';
import { Link } from 'react-router-dom';
// import YoutubeEmbed from './YoutubeEmbed.js';
import { useEffect } from 'react';

const HowItWorks = () => {
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
        <div className="title is-4 mt-2 mr-6 ml-6">How it works</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 is-6-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>Call us</u>
            </strong>
            <p>
              To help you decide if mediation is right for you, we offer a{' '}
              <strong>free 20-minute introductory call</strong>, so that you can
              tell us the issues you&apos;d like to resolve and we can answer
              any questions or concerns you might have.
            </p>
            <br />
            <strong>
              <u>The Intake Meeting</u>
            </strong>
            <p className="pb-4">
              Each party is then invited to attend a 60-minute{' '}
              <strong>one to one</strong> Intake Meeting, a{' '}
              <strong>get to know you</strong> session, where you are able to
              tell the mediator in confidence anything you&apos;d like them to
              know, and the mediator can explain more about the process of
              reaching a settlement. Then, if you both decide mediation is the
              right path for you, we will arrange a joint session.
            </p>
          </div>
          <div className=" column  is-6-desktop is-12-tablet is-12-mobile pt-5 pr-6 pl-6  ">
            <div className="video-responsive">
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/HvO1QI_xlB0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
                title="How Mediation Works"
                frameBorder="1"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="columns  pr-6 pl-4 ">
          <div className="column pt-0 pl-6 pr-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <div className="mediator-text pb-4">
              <strong>
                <u>MIAMS</u>
              </strong>
              <p>
                A MIAM is a more formal Intake Meeting. The law now requires
                everyone who wishes to take a child or finance matter to court
                to attend a Mediation Information and Assessment Meeting (MIAM),
                to consider whether the matter may be suitable for mediation.
              </p>
              <p>
                A mediator will take you individually through the MIAM and,
                where agreed, will then contact the other party to invite them
                to attend. We will always do our best to bring about mediation
                but If the MIAM is unsuccessful, the mediator can sign the form
                required if you need to proceed to court.
              </p>
              <br />
              <strong>
                <u>Joint Mediation</u>
              </strong>
              <p>
                Once you have both decided to go ahead, the mediator will book
                you in for a joint session. These sessions usually last 90
                minutes, so that significant progress can be made.
              </p>
              <p>
                If the issues to be resolved include money and property, the
                mediator will give you both Financial Disclosure forms to fill
                in, which asks for full details of your finances (including
                savings, investments, pensions, liabilities, properties,
                mortgages etc). The mediator will then draw up your Financial
                Statement, giving a clear picture of your joint financial
                situation, so that you can start to discuss options for
                settlement.
              </p>
              <p>
                Couples typically need 3-5 joint sessions to resolve matters,
                but every case is different - it all depends on the complexity
                of the issues being discussed.
              </p>
              <br />
              <strong>
                <u>After Mediation</u>
              </strong>
              <p>
                Once you have successfully concluded mediation, the mediator
                will prepare a written document called a Memorandum of
                Understanding, detailing the proposals you have agreed.
              </p>
              <p>
                In Finance cases, this MOU, along with your Financial Statement,
                is usually presented to a solicitor, who will draft a legally
                binding agreement or Consent Order for you both to sign, which
                will then be approved by the court.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/whatismediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">What Is Mediation? </p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          <Link to={'/divorceandmediation'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">Divorce &amp; Mediation </p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default HowItWorks;
