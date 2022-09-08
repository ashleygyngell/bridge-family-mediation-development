import React from 'react';
import { useNavigate } from 'react-router-dom';
import fmcLogo from '../assets/logos/fmcLogo.jpg';
import fmcLogoChildInclusive from '../assets/logos/fmcLogoChildInclusive.jpg';

const Mediator1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="back-button pl-4 pt-1 " onClick={() => navigate(-1)}>
        <span>
          <i className="fa-solid fa-arrow-left "></i> Back
        </span>
      </button>
      <div className="content  ">
        <body className="pl-6 pr-6">
          <div className="columns pt-6 pl-6 ">
            <div className="column is-4 about-image has-text-centered ">
              <img
                src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                alt="Placeholder image"
                className="mediator-image has-text-centered"
              />
              <div>
                <p id="fontawesome-styling" className="subtitle is-5 pt-5 pb-2">
                  <i className="fa-solid fa-phone is-black"></i>
                  <a href="tel:07930366661">
                    {' '}
                    <span id="mediator-contact-info">07930 366661</span>
                  </a>
                </p>

                <a
                  id="fontawesome-styling"
                  className="subtitle "
                  href="mailto:katebrown@bridgefamilymediation.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span id="mediator-contact-info">
                    {' '}
                    katebrown@bridgefamilymediation.co.uk
                  </span>
                </a>
              </div>
            </div>
            <div className="column is-8 pr-6 ">
              <div className="">
                <div className="media">
                  <div className="media-content ">
                    <p className="title is-1 ">Kate Brown</p>
                  </div>
                </div>

                <p className="subtitle is-5 pt-5 has-text-centered">
                  Balham | Barnes | Battersea
                </p>
              </div>
              <div className="mediator-text pt-5 pb-5 ">
                <p>
                  I have a special interest in child development and working
                  with families to prioritise the emotional wellbeing of their
                  children. After a long first career in the media, managing a
                  team of creative people, much of my professional experience
                  has been about helping people work together, resolve conflict
                  and fulfil their potential.{' '}
                </p>{' '}
                <br></br>
                <p>
                  Since qualifying as a family mediator, I have been able to use
                  these skills to guide people through separation and divorce,
                  to try and minimise the distress of this challenging time and
                  reach fair and lasting agreements. I am committed to helping
                  families, however complex their situation, resolve matters
                  sensitively, swiftly and affordably.
                </p>
                <div className="mediator-logos pt-4 ">
                  <img href="" src={fmcLogo} alt="FMC Logo" />
                  <img
                    src={fmcLogoChildInclusive}
                    alt="FMC Child Mediation Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Mediator1;
