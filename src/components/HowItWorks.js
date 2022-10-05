import React from 'react';
import { Link } from 'react-router-dom';
import YoutubeEmbed from './YoutubeEmbed.js';
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
        <div className="title is-4 mt-4 mr-6 ml-6">How does it work?</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 is-6-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>Mediation</u>
            </strong>
            <p>
              Family Mediation is a voluntary process, where separating or
              divorcing couples come together to have a discussion — not an
              argument — about their future arrangements, in a safe,
              well-ordered and professional environment.
            </p>
            <p>
              Whilst we will guide you through the process and ask you to
              consider possible options, mediators are completely impartial. We
              are not there to make decisions for you but to help both of you
              resolve the issues and decide your own arrangements for your
              future.
            </p>
            <p>
              Mediation does not replace legal advice and you are separately
              encouraged to ask a solicitor to look at any agreement reached at
              mediation to get their legal opinion.
            </p>
            <p>
              Mediation is also a confidential process, which means you are free
              to explore all options, safe in the knowledge that if mediation
              does not work, the court is not entitled to hear about the
              discussions that took place, so that they won&apos;t prejudice any
              future legal proceedings.
            </p>
            <br />
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
            <div className="mediator-text">
              <br />
              <strong>
                <u>Intake meeting</u>
              </strong>
              <p>
                Each party is then invited to attend a separate one-hour meeting
                on their own (sometimes called a MIAM — a Mediation Information
                and Assessment Meeting), where we will fully explain the
                mediation process and assess whether mediation is the
                appropriate path for you.{' '}
              </p>
              <p>
                You will have an opportunity to ask any questions and discuss
                any concerns. After both parties have attended their intake
                meeting and decide to go ahead with mediation, we arrange a
                joint session. These meetings generally last 1.5 hours, so that
                real progress can be made.
              </p>
            </div>
          </div>
        </div>
        <p className="mediator-text pr-6 pl-6 pb-6">
          <strong>
            <u>Call us</u>
          </strong>
          <p></p>In order to decide if mediation is suitable for you, we offer a
          20-minute call at no charge, so that you can tell us about the issues
          you wish to resolve and we can explain how we might be able to help.
        </p>
      </div>
    </>
  );
};

export default HowItWorks;
