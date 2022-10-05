import React from 'react';
// import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const DivorceAndMediation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }

    function closeModal($el) {
      $el.classList.remove('is-active');
    }

    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(
      ($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
          openModal($target);
        });
      }
    );

    // Add a click event on various child elements to close the parent modal
    (
      document.querySelectorAll(
        '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
      ) || []
    ).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) {
        // Escape key
        closeAllModals();
      }
    });
  });

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
        <div className="title is-4 mt-4 mr-6 ml-6">Divorce &amp; Mediation</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>
                The divorce process explained &mdash; and where mediation comes
                in
              </u>
            </strong>

            <br />
            <p>
              If you are separating or divorcing and need to talk about
              property, financial matters or child arrangements, then mediation
              can help you work through each stage.
            </p>
            <p>
              If you are considering making a Divorce Application, then you will
              be the Applicant. The other person receiving the Application will
              be the Respondent. The Applicant normally asks a solicitor to
              prepare and send the Divorce Application to the Family Court. The
              court checks it, allocates it a case number and sends it to the
              Respondent with a response form, the{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Acknowledgment of Service.</strong>
              </a>{' '}
              If the Respondent confirms in this document that they agree to and
              will not contest the divorce, then the Applicant asks the court to
              fix a date for the{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Decree Nisi.</strong>
              </a>{' '}
              This is a date when the Judge will have checked the documents and
              will pronounce that the divorce can go ahead.
            </p>
            <p>
              Although a hearing date is set, if the divorce is not contested
              and there are no costs issues to be decided, then usually neither
              of you is expected to attend.
            </p>
            <strong>
              <u>
                What happens if there are Property or Finance issues to be
                resolved or Arrangements for Children?
              </u>
            </strong>
            <p>
              During any of the above period, you are encouraged to attend
              mediation if you need to discuss matters relating to the divorce.
              The advantage of negotiating through mediation rather than through
              solicitors or through the court process is that mediation can be
              quicker, cheaper and more collaborative. It follows a similar
              structure (requiring full financial disclosure) but the
              negotiations can be much more effective with you both in the same
              room, dealing with the issues together and making your own
              decisions depending on what works best for you and for any
              children.
            </p>
            <p>
              If you reach a settlement through mediation, the Mediator will
              prepare a{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Memorandum of Understanding</strong>
              </a>{' '}
              setting out the terms agreed, and an{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Open Financial Statement</strong>
              </a>{' '}
              setting out the financial disclosure. You can then instruct a
              solicitor to convert the Memorandum into a{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Consent Order</strong>
              </a>
              , to be sent to the Court for the Judge&apos;s approval.
            </p>
            <p>
              The Consent Order can be lodged as long as the Decree Nisi stage
              has been reached. It cannot be lodged before then.
            </p>
            <strong>
              <u>At what point is the Divorce complete?</u>
            </strong>
            <p>
              There needs to be a minimum waiting period of just over 6 weeks
              from the date of Decree Nisi before the applicant can apply for{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Decree Absolute</strong>
              </a>
              . If mediation discussions are still ongoing you can agree to wait
              before applying for the Decree Absolute. Often people wait so that
              the Consent Order and the application for Decree Absolute are sent
              to the court at the same time.
            </p>
            <strong>
              <u>Changes to the Divorce Process</u>
            </strong>
            <p>
              The divorce process will soon include an option for{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>no-fault based divorce</strong>
              </a>
              . This means an application for a divorce will be possible on the
              basis that both people agree a divorce should go through, and
              neither wants to allocate any blame on the other. It is hoped this
              will allow the process to be more amicable and constructive.
            </p>

            <br />
          </div>
        </div>
        <div id="modal-js-example" className="modal">
          <div className="modal-background"></div>

          <div className="modal-content fade-in-modal ">
            <div className="box">
              <p className="subtitle has-text-centered pb-3">Definition </p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              cum error nulla quod quo, dolor repellat laborum eaque repellendus
              mollitia!
            </div>
          </div>

          <button className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    </>
  );
};

export default DivorceAndMediation;
