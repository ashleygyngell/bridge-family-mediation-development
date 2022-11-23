import { React, useEffect } from 'react';

const ComplaintsProcedure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">Complaints Procedure</div>
        <div className="columns pt-5 pr-4 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>Our Commitment to you</u>
            </strong>

            <p>
              At Bridge Family Mediation, we want to ensure that we run the best
              service possible. If there is any dissatisfaction, we would like
              the opportunity to address this and restore a good working
              relationship. We value your views and will endeavour to use them
              in a constructive and responsive manner.
            </p>
            <p>
              We aim to fully understand the nature of your concern and to
              respond promptly either immediately at the mediation session
              itself or shortly after, by telephone or email.
            </p>
            <p>
              If you feel we have been unable to resolve the issue informally,
              you are entitled to take it forward as a complaint. We may at this
              stage need to inform the other person in the mediation that a
              complaint has been raised. We will not pass on any details of the
              complaint.
            </p>

            <strong>
              <u>Who can make a complaint?</u>
            </strong>

            <p>
              A complaint can be made by a client, a former client or a
              qualifying third party (a prospective client directly affected by
              a mediator&apos;s professional behaviour, or another professional
              who attends a mediation, eg an interpreter).
            </p>
            <p>
              Please see further details at the Family Mediation Council’s
              Complaints Procedure: {''}
              <a
                href="https://www.familymediationcouncil.org.uk/complaints-about-mediators"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.familymediationcouncil.org.uk/complaints-about-mediators
              </a>
            </p>

            <strong>
              <u>What can constitute a complaint?</u>
            </strong>

            <p>
              If we have been unable to resolve the matter with you by phone or
              in person conversation, we will ask you to explain in writing,
              either by email or letter, what happened to cause the
              dissatisfaction, the impact it had on you, and any ideas you have
              for the situation to be resolved.
            </p>
            <p>
              The complaint must relate to a breach of the Family Mediation
              Council&apos;s Code of Practice or Standards Framework. It needs
              to be made within three months.{' '}
            </p>
            <p>
              We are not required to investigate complaints that appear to be
              vexatious or of a purely personal nature.{' '}
            </p>

            <strong>
              <u>How we will respond</u>
            </strong>

            <p>We will acknowledge the complaint within 48 hours.</p>
            <p>
              The complaint will be investigated and responded to in full within
              a maximum of 30 days of receipt. In exceptional circumstances,
              further time may be required, in which case you will be notified
              in writing.
            </p>
            <p>
              Once the complaint has been considered, an outcome will be
              suggested that will hopefully be fair and to the satisfaction of
              all parties.
            </p>
            <p>
              If you are not satisfied with the suggested outcome, please let us
              know within 3 weeks. We will try to review the situation further
              or we will let you know if we feel we cannot proceed with it. We
              will then let you know what your next options are.
            </p>

            <p>
              At any point in the Complaints Procedure, we may suggest that the
              complaint could be dealt with through mediation. The mediation
              would be provided by an outside mediator, agreed by both parties,
              and any charge will be divided equally.
            </p>

            <strong>
              <u>A further level</u>
            </strong>

            <p>
              If you remain dissatisfied with the outcome of the Complaints
              Procedure, you have the option, within three months, of contacting
              the Family Mediation Standards Board: {''}
              <a
                href="https://www.familymediationcouncil.org.uk/fmsb"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.familymediationcouncil.org.uk/fmsb
              </a>
            </p>
            <p>
              We hope this will not be necessary and that we will be able to
              resolve together any issues you want to raise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintsProcedure;
