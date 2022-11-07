import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import divorceCalculator from '../assets/images/stock-photo-japanese-couple-s-marriage-and-divorce-money-image-1915079419.jpg';

const DivorceAndMediation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="title is-4 mt-2 mr-6 ml-6">Divorce &amp; Mediation</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>How does Mediation work alongside the divorce process?</u>
            </strong>
            <br />
            <p>
              If you are separating or divorcing and need to talk about property
              or financial matters, <strong>Mediation</strong> can help you work
              through each stage.
            </p>
            <p>
              The procedure for <strong>Divorce</strong> changed in April 2022
              and it is now a no-fault based process.
            </p>
            <p>
              The process starts with the completion of the{' '}
              <strong>Divorce Application</strong>. This can be done as sole
              applicant, or as a joint applicant together with your spouse. It
              can be done as a paper document or as an online application. There
              is a one-off fee to pay to the court when the application is made.
            </p>
            <p>
              If the application is by a sole applicant, the other person has an
              opportunity to acknowledge/ respond. The divorce can however
              proceed even if a response is not received.
            </p>
            <p>
              After a period of 20 weeks from the date of the application, the{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Conditional Order</strong>
              </a>{' '}
              is made.
            </p>
            <p>
              The{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Final Order</strong>
              </a>{' '}
              can be applied for a minimum of 6 weeks after the date of the
              Conditional Order. If discussions are still ongoing in relation to
              property or finance, some people agree to wait before applying for
              the Final Order, so that they can apply to the court for a{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Consent Order</strong>
              </a>{' '}
              (see below) at the same time.{' '}
            </p>
            <strong>
              <u>
                What if there are property or finance issues to be resolved?
              </u>
            </strong>
            <p>
              If there are property or finance matters in relation to the
              marriage, you will need to reach a financial settlement, an
              agreement as to how the assets are to be divided. This is where
              mediation comes in. An advantage of mediation is that negotiations
              can be more effective with both of you in the same space, dealing
              with the issues directly, and making your own decisions.
            </p>
            <p>
              If you reach an agreement in mediation, the mediator will prepare
              a{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Memorandum of Understanding</strong>
              </a>{' '}
              setting out the terms agreed, and an{' '}
              <a className="js-modal-trigger" data-target="modal-js-example">
                <strong>Open Financial Statement</strong>
              </a>{' '}
              setting out the financial disclosure. You can then instruct a
              solicitor to convert the Memorandum into a Consent Order. This can
              be sent to the Court for the Judge&apos;s approval, without you
              having to attend. For more details, please refer to the{' '}
              <Link to={'/aftermediation'}> After Mediation</Link> page.
            </p>
            <p>
              The Consent Order can be submitted to court, as long as the
              Conditional Order has been made. It cannot be submitted before
              then.{' '}
            </p>

            <strong>
              <u>Children</u>
            </strong>
            <p>
              Any arrangements for your children can be discussed and resolved
              separately from the divorce process. However, couples often choose
              to resolve these in mediation at the same time as discussing
              financial matters.
            </p>
            <p>
              There is information for each stage at{' '}
              <a
                href="https://www.gov.uk/get-a-divorce"
                target="_blank"
                rel="noreferrer"
              >
                https://www.gov.uk/get-a-divorce
              </a>
            </p>

            {/* ---------------------------- ----------------------------
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
            <br /> */}
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
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/childreninmediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">Children In Mediation</p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          <Link to={'/aftermediation'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">After Mediation</p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default DivorceAndMediation;
