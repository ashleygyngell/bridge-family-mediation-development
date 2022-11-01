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
              <u>Mediation</u>
            </strong>
            <p>
              Family mediation is a <strong>voluntary</strong> process, where
              couples going through divorce or separation can have a discussion
              - not an argument - about future arrangements involving money,
              property or children, guided by an experienced mediator.
            </p>
            <p>
              Mediation is <strong>impartial.</strong> The mediator does not
              take sides, making sure that all negotiations are balanced and
              that both parties are able to freely express their views.
            </p>
            <p>
              The <strong> power of decision-making</strong> rests with you. The
              mediator will not tell you what to do but can suggest possible
              options and help you both make the right arrangements about your
              future.
            </p>
            <p>
              Mediation is <strong>confidential</strong>, which means you are
              free to explore all options safe in the knowledge that if
              mediation fails, the negotiations that took place were
              &#39;without prejudice&#39; and won&#39;t influence any future
              legal proceedings.
            </p>
            <p>
              There are two <strong>exceptions to confidentiality</strong>: one
              involves financial disclosure, where the court is able to call on
              financial information provided during mediation and use it to form
              a judgment. The other is where a mediator is concerned that a
              child is at risk of serious harm and therefore has a duty to
              report it to the appropriate services.
            </p>
            <p>
              When you first contact us, we offer a 20 minute introductory call
              for you to explain the issues you wish to resolve and for us to
              tell you how we can help.
            </p>
            <br />
            <strong>
              <u>After Mediation</u>
            </strong>
            <p>
              If mediation is successful, the mediator will prepare a written
              document detailing the arrangements that have been agreed. In
              finance cases, this can be presented to a solicitor, who will then
              draft a legally-binding agreement, which can be approved by the
              courts without you having to attend.
            </p>

            <p className="pb-4">
              With regards to children, research shows that agreements about
              children reached in mediation last longer than orders imposed by a
              judge. It is now the firm belief of the judicial system that
              wherever possible children should not be the subject of court
              orders.
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

            <div className="mediator-text">
              <br />
              <strong>
                <u>MIAMS</u>
              </strong>
              <p>
                The law now requires everyone who wishes to take a child, family
                property or finance matter to court to attend a Mediation,
                Information and Assessment Meeting (MIAM) to decide whether the
                matter may be suitable for mediation.
              </p>
              <p>
                A mediator will take you individually through the MIAM and,
                where agreed, will then contact the other party to invite them
                to attend a joint mediation session. If the MIAM is unsuccessful
                in bringing about mediation, the mediator can send the matter
                back to court.{' '}
              </p>
              <p className="pb-4">
                Family First has a franchise to grant Legal Aid, so that if you
                are on a low income or claiming welfare benefits, you may be
                entitled to free mediation. Where one party is granted Legal
                Aid, the other party will benefit by also receiving their MIAM
                free of charge, even if they themselves are not eligible for
                Legal Aid.
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
