import React from 'react';
import { Link } from 'react-router-dom';
import childwithfather from '../assets/images/child-with-father.png';
import { useEffect } from 'react';

const ChildrenInMediation = () => {
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

      <div className="content  ">
        <div className="title is-4 mt-2 mr-6 ml-6">Children In Mediation</div>
        <div className="columns pt-0 pr-6 pl-4 ">
          <div className="column mt-5 pl-6 pr-6 pb-3 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <strong>
              <u>Child Inclusive Mediation (CIM)</u>
            </strong>
            <p>
              Parents come to mediation to talk about what their lives will look
              like now they are separating. We will ensure that all discussions
              that take place will be child focused. We respect the United
              Nations Convention on the Rights of the Child and we will
              endeavour to find out the children&apos;s wishes about their
              future arrangements.
            </p>
            <p>
              Children may have so many questions about their future, which can
              cause anxiety:
            </p>
            <p>
              <bl>
                <div className="columns">
                  <div className="column">
                    <li className="ml-4">Where will they live?</li>
                    <li className="ml-4">Will they have to move house?</li>
                    <li className="ml-4">How will they see both parents?</li>

                    <li className="ml-4">
                      What about their friends, clubs, school, activities?
                    </li>
                    <li className="ml-4">
                      How about family pets … will they see the dog?
                    </li>
                    <li className="ml-4">
                      What about Grandma and Grandad, and the cousins?
                    </li>
                  </div>
                </div>
              </bl>
            </p>
            <p>
              The government suggests that children over 10 years old should
              have the option of meeting a Family Mediator, so that they can
              have a voice in the decisions being made for them.
            </p>
            <strong>
              <u>How it works</u>
            </strong>
            <p>
              One of our qualified mediators will discuss Child Inclusive
              Mediation (CIM) with both parents. If they would like their
              children to see a mediator, then the mediator will get in touch
              directly with the children to invite them to a meeting, which will
              take place without the parents present. The meeting normally lasts
              30-60 minutes and siblings can be seen together or one to one.
            </p>
            <p>
              This confidential session gives children an opportunity to share
              their worries and contribute to what their future will look like
              after their parents are no longer together. The mediator then
              feeds back any information the child wishes to be passed onto the
              parents in a separate meeting, without the child being there.
            </p>
            <p>
              Here&apos;s a film about Child Inclusive Mediation, which might be
              useful:
            </p>
            <div className="columns">
              <div className="column is-2-desktop"></div>
              <div className=" column  is-8-desktop is-12-tablet is-12-mobile pt-5 pr-6 pl-6   ">
                <div className="video-responsive ">
                  <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/NLI9k_fG9wI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    title="The Rights Idea? Children's rights when parents separate: Tom's story"
                    frameBorder="1"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className=" column  is-12-desktop is-12-tablet is-12-mobile pt-5  ">
              <p>
                <strong>The benefits of Child Inclusive Mediation are:</strong>
              </p>
              <bl>
                <li className="ml-4">
                  Children can have a say in arrangements being made for them.
                </li>
                <li className="ml-4">
                  A child can tell a mediator what is working and not working,
                  without fear of upsetting their parents.
                </li>
                <li className="ml-4">
                  The mediator will feed back to the parents only what the child
                  wants them to hear.
                </li>
                <li className="ml-4">
                  CIM can help parents make decisions, taking account of their
                  child&apos;s feelings.
                </li>
                <li className="ml-4">
                  It helps parents reach joint decisions, by seeing the
                  situation through the eyes of the child.
                </li>
                <li className="ml-4">
                  It can act as a reminder to the parents that their children
                  love them both.
                </li>
                <li className="ml-4">
                  Hearing a child&apos;s views can help them put their child
                  first and act in their best interests.
                </li>
              </bl>
            </div>
            <div className=" column is-12-desktop is-12-tablet is-12-mobile  pt-6 pl-6 pr-6 pb-6 has-text-centered ">
              <img
                id="mediation-breakdown-image"
                src={childwithfather}
                alt="Child With Father"
                width="auto"
              />{' '}
              <p>
                {/* https://www.dreamstime.com/back-view-father-son-holding-hands-walking-bridge-park-image127765196 */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/whatwediscuss'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">What We Discuss </p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          <Link to={'/aftermediation'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">After Mediation </p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default ChildrenInMediation;
