import React from 'react';
import { useNavigate } from 'react-router-dom';
import fmcLogo from '../assets/logos/fmcLogo.jpg';
import fmcLogoChildInclusive from '../assets/logos/fmcLogoChildInclusive.jpg';

const Mediator3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="back-button pl-4 pt-1 " onClick={() => navigate(-1)}>
        <span>
          <i className="fa-solid fa-arrow-left "></i> Back
        </span>
      </button>
      <div className="content  ">
        <body className="">
          <div className="columns pt-6 ">
            <div className="column is-4 about-image has-text-centered pr-5">
              <img
                src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                alt="Placeholder image"
                className="mediator-image has-text-centered"
              />
              <div className="subtitle">
                <p id="fontawesome-styling" className=" pt-4  ">
                  <a href="tel:07880724658">
                    {' '}
                    <span id="mediator-contact-info"> 07880 724658</span>
                  </a>

                  <a
                    id="fontawesome-styling"
                    className="subtitle "
                    href="mailto:juleswaring@bridgefamilymediation.co.uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span id="mediator-contact-info">
                      {' '}
                      juleswaring@bridgefamilymediation.co.uk
                    </span>
                  </a>
                </p>
                <div className="mediator-logos pt-5 ">
                  <img src={fmcLogo} alt="FMC Logo" />
                  <img
                    src={fmcLogoChildInclusive}
                    alt="FMC Child Mediation Logo"
                  />
                </div>
              </div>
            </div>
            <div className="column is-8 pr-6">
              <div className="">
                <div className="media">
                  <div className="media-content ">
                    <p className="title is-1 ">Jules Waring</p>
                  </div>
                </div>

                <p className="subtitle is-5 pt-5 has-text-centered">
                  Balham | Barnes | Battersea
                </p>
              </div>
              <div className="mediator-text pt-5 pb-5 ">
                <p>
                  Like Kate, I had a career in media for over 30 years before
                  deciding to train as a family mediator. I&#39;ve been
                  responsible for running a team and recruiting people,
                  nurturing them through a pressurised career path and being
                  their support and mentor.
                </p>{' '}
                <p>
                  I feel these skills make me a highly empathetic and successful
                  mediator, where I can draw on my experience to help families
                  reach amicable and long-lasting solutions.
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Mediator3;
