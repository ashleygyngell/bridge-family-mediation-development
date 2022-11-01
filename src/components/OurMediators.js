import React from 'react';
import { Link } from 'react-router-dom';
import carolineHeadshot from '../assets/images/mediators/c-dunne-headshot.jpeg';

const About = () => {
  return (
    <>
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">Our mediators</div>

        <div className="columns pt-6 pr-6 pl-6 ">
          {/* Mediator 1 */}
          <div className="column ">
            <div id="mediator-card" className="card pt-2">
              <div className="card-image pt-5 ">
                <Link to={'/katebrown'}>
                  <figure className="image is-2by2 ">
                    <img
                      id="about-image"
                      src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>

              <div className="card-content  has-text-black ">
                <Link to={'/katebrown'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-6">Kate Brown</p>
                    </div>
                  </div>
                </Link>
                <p
                  id="mediator-card-subtitle"
                  className="subtitle is-6 has-text-centered pt-2 "
                >
                  Barnes | Chiswick | Richmond
                </p>
                <div id="mediator-card-text">
                  <p>
                    I am an experienced Family Mediator, fully accredited by the
                    FMCA, and comitted to helping families resolve highly
                    sensitive matters arising from divorce and separation,
                    including financial & property issues and arrangement for
                    children.
                  </p>
                  <Link to={'/katebrown'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 2 */}
          <div className="column">
            <div id="mediator-card" className="card pt-2">
              <div className="card-image pt-5">
                <Link to={'/kathleenstraub'}>
                  <figure className="image is-2by2">
                    <img
                      id="about-image"
                      src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content  has-text-black ">
                <Link to={'/kathleenstraub'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-6">Kathleen Straub</p>
                    </div>
                  </div>
                </Link>
                <p
                  id="mediator-card-subtitle"
                  className="subtitle is-6 has-text-centered pt-2 "
                >
                  Balham | Barnes | Battersea{' '}
                </p>
                <div id="mediator-card-text">
                  <p>
                    I trained as a Family Mediator with the Family
                    Mediators&apos; Association in 2013 and hold full Family
                    Mediation Council accreditation. I am qualified as a
                    Professional Practice Consultant, supervising other family
                    mediators in their professional development.
                  </p>
                  <Link to={'/kathleenstraub'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 3 */}
          <div className="column">
            <div id="mediator-card" className="card pt-2">
              <div className="card-image pt-5">
                <Link to={'/juleswaring'}>
                  <figure className="image is-2by2">
                    <img
                      id="about-image"
                      src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content  has-text-black">
                <Link to={'/juleswaring'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-6">Jules Waring</p>
                    </div>
                  </div>
                </Link>
                <p
                  id="mediator-card-subtitle"
                  className="subtitle is-6 has-text-centered pt-2 "
                >
                  Balham | Clapham | Streatham
                </p>
                <div id="mediator-card-text">
                  <p>
                    My professional ambition is to help people make fair
                    decisions which leave neither party aggrieved and enable
                    them to be loving parents to the children they adore.
                  </p>
                  <Link to={'/juleswaring'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 4 */}
          <div className="column">
            <div id="mediator-card" className="card pt-2">
              <div className="card-image pt-5 ">
                <Link to={'/carolinedunne'}>
                  <figure className="image is-2by2">
                    <img
                      id="about-image"
                      src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content  has-text-black">
                <Link to={'/carolinedunne'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-6 ">Caroline Dunne</p>
                    </div>
                  </div>
                </Link>
                <p
                  id="mediator-card-subtitle"
                  className="subtitle is-6 has-text-centered pt-2 "
                >
                  Battersea | Sutton | Wimbledon
                </p>
                <div id="mediator-card-text">
                  <p>
                    I am family mediator accredited with the Family Mediation
                    Council (FMCA) and a member of the Family Mediators&apos;
                    Association (FMA).
                  </p>
                  <Link to={'/carolinedunne'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          {/* <Link to={'/whatismediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">What Is Mediation? </p>
          </Link> */}
        </button>

        <button className="faq-button column is-6-mobile pt-5">
          <Link to={'/whychooseus'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle ">Why Choose Us </p>
          </Link>
        </button>
      </div>
    </>
  );
};

export default About;
