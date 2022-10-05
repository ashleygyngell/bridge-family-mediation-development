import React from 'react';
import { useNavigate } from 'react-router-dom';

const UsefulLinks = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <button className="back-button pl-4 pt-1 " onClick={() => navigate(-1)}>
        <span>
          <i className="fa-solid fa-arrow-left "></i> Back
        </span>
      </button> */}
      <div className="content ">
        <div className="title is-4 mt-4 mr-6 ml-6">Useful Links</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text  ">
            <div>
              <p className="">
                <strong>
                  <u>Divorce step by step</u>{' '}
                </strong>
                <br /> Government website:{' '}
                <a
                  href="http://www.gov.uk/divorce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gov.uk/divorce
                </a>
              </p>

              <p>
                <strong>
                  <u>Seperating Parents</u>{' '}
                </strong>
                <br />
                Only mums:{' '}
                <a
                  href="https://www.onlymums.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.onlymums.org{' '}
                </a>
                <br />
                Only dads:{' '}
                <a
                  href="https://www.onlydads.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.onlydads.org
                </a>
              </p>
              <p>
                <strong>
                  <u>Mediation Explained</u>{' '}
                </strong>
                <br />
                Information from the Ministry of Justice:{' '}
                <a
                  href="http://www.gov.uk/government/publications/family-mediation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gov.uk/government/publications/family-mediation
                </a>{' '}
                <br />
                Family Mediators&#39; Association:{' '}
                <a
                  href="http://www.thefma.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.thefma.co.uk
                </a>
                <br /> Videos to help you understand mediation:{' '}
                <a
                  href="https://thefma.co.uk/about-family-mediation/videos-showing-mediation-works/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://thefma.co.uk/about-family-mediation/videos-showing-mediation-works
                </a>
                <br />
                Family Mediation Council:{' '}
                <a
                  href="http://www.familymediationcouncil.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.familymediationcouncil.org.uk
                </a>
                <br />
                Resolution:{' '}
                <a
                  href="http://www.resolution.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.resolution.org.uk
                </a>
                <br />
                Legal Aid eligibility calculator:{' '}
                <a
                  href="http://www.civil-eligibility-calculator.justice.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>www.civil-eligibility-calculator.justice.gov.uk</span>
                </a>
              </p>
              <p>
                <strong>
                  <u>Child Arrangements</u>{' '}
                </strong>
                <br />
                FORM C100 (for an application for a court order to resolve child
                arrangements):{' '}
                <a
                  href="https://www.gov.uk/government/publications/form-c100-application-under-the-children-act-1989-for-a-child-arrangements-prohibited-steps-specific-issue-section-8-order-or-to-vary-or-discharge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gov.uk/government/publications/form-c100-application
                </a>
                <br />
                CAFCASS: Children and Family Court Advisory and Support Service:{' '}
                <a
                  href="https://www.cafcass.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.cafcass.gov.uk/
                </a>
                <br />
                Kids in the Middle:{' '}
                <a
                  href="http://www.voicesinthemiddle.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.voicesinthemiddle.org.uk
                </a>
                <br />
                The Parenting Plan:{' '}
                <a
                  href="http://www.cafcass.gov.uk/grown-ups/parenting-plan.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cafcass.gov.uk/grown-ups/parenting-plan.aspx
                </a>
                <br />
                Sorting out Separation:{' '}
                <a
                  href="https://www.gov.uk/separation-divorce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gov.uk/separation-divorce
                </a>
                <br />A young person&#39;s guide to mediation &#8212; “What
                About Me?”:{' '}
                <a
                  href="https://thefma.co.uk/wp-content/uploads/2016/11/Interactive-Guide_family-mediation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://thefma.co.uk/wp-content/uploads/2016/11/Interactive-Guide_family-mediation.pdf
                </a>
                <br />
                The Handover Book &#8212; written for separated families to help
                communication:{' '}
                <a
                  href="https://www.thehandoverbook.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.thehandoverbook.co.uk/
                </a>
                <br />
                OurFamilyWizard &#8212; co-parenting app:{' '}
                <a
                  href="http://www.ourfamilywizard.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ourfamilywizard.co.uk
                </a>
                <br />
                Children&#39; s Wellness Centre, Chiswick:{' '}
                <a
                  href="http://www.childrenswellnesscentre.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.childrenswellnesscentre.co.uk
                </a>
              </p>
              <p>
                <strong>
                  <u>Finances</u>{' '}
                </strong>
                <br />
                The Money Advice Service (including Divorce and Money
                Calculator):{' '}
                <a
                  href="https://www.moneyadviceservice.org.uk/en/articles/divorce-and-money-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.moneyadviceservice.org.uk/en/articles/divorce-and-money-calculator
                </a>
                <br />
                Form A (for an application for a financial order):
                <a
                  href="https://www.gov.uk/government/publications/form-a-notice-of-intention-to-proceed-with-an-application-for-a-financial-order"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gov.uk/government/publications/form-a
                </a>
                <br />
                Pensions and divorce:{' '}
                <a
                  href="https://www.pensionwise.gov.uk/en/divorce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.pensionwise.gov.uk/en/divorce
                </a>
              </p>
              <p>
                <strong>
                  <u>Relationship advice &amp; counselling</u>
                </strong>
                <br />
                Relate:{' '}
                <a
                  href="http://www.relate.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.relate.org.uk
                </a>
                <br />
                British Association for Counselling and Psychotherapy:{' '}
                <a
                  href="http://www.bacp.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.bacp.co.uk
                </a>
              </p>
              <p>
                <strong>
                  <u>Other support</u>
                </strong>
                <br />
                Citizens Advice Bureau:{' '}
                <a
                  href="http://www.citizensadvice.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.citizensadvice.org.uk
                </a>
                <br />
                National Domestic Violence Helpline:{' '}
                <a
                  href="http://www.nationaldomesticviolencehelpline.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.nationaldomesticviolencehelpline.org.uk
                </a>
                <br />
                Wikivorce:{' '}
                <a
                  href=" https://divorce.wikivorce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://divorce.wikivorce.com{' '}
                </a>{' '}
                Helpline:<a href="tel:07930366661"> 01202 805 020 </a> Email:{' '}
                <span id="cloakae37f47913430251ad22290311bc2c01">
                  <a href="mailto:support@wikivorce.com">
                    support@wikivorce.com
                  </a>
                </span>
                <br />
                Advice Now:{' '}
                <a
                  href="http://www.advicenow.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.advicenow.org.uk
                </a>
                <br />
                Divorce Aid:{' '}
                <a
                  href="http://www.divorceaid.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.divorceaid.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsefulLinks;
