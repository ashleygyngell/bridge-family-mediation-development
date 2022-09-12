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
        <body className="">
          <div className="columns pt-6 ">
            <div className="column is-4  has-text-centered   ">
              <img
                src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                alt="Placeholder image"
                className="mediator-image has-text-centered about-image "
              />
              <div className="subtitle">
                <p id="fontawesome-styling" className=" pt-4  ">
                  <a href="tel:07930366661">
                    {' '}
                    <span id="mediator-contact-info">07930 366661</span>
                  </a>

                  <a
                    id="fontawesome-styling"
                    className=""
                    href="mailto:katebrown@bridgefamilymediation.co.uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span id="mediator-contact-info">
                      {' '}
                      katebrown@bridgefamilymediation.co.uk
                    </span>
                  </a>
                </p>
                <div className="mediator-logos pt-5 ">
                  <img href="" src={fmcLogo} alt="FMC Logo" />
                  <img
                    src={fmcLogoChildInclusive}
                    alt="FMC Child Mediation Logo"
                  />
                </div>
              </div>
            </div>
            <div className="column is-8 pr-6 pl-5 ">
              <div className="">
                <div className="media ">
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
                  I completed my mediation training with the Family
                  Mediators&#39; Association in 2015 and I am fully accredited
                  by the Family Mediation Council. I am also qualified in Child
                  Inclusive Mediation and can see children aged 10 and over
                  within the mediation process.
                </p>
                <p>
                  I have a special interest in child development and working
                  with families to prioritise the emotional wellbeing of their
                  children. After a long first career in the media, managing a
                  team of creative people, much of my professional experience
                  has been about helping people work together, resolve conflict
                  and fulfil their potential.{' '}
                </p>{' '}
                <p>
                  Since qualifying as a family mediator, I have been able to use
                  these skills to guide people through separation and divorce,
                  to try and minimise the distress of this challenging time and
                  reach fair and lasting agreements. I am committed to helping
                  families, however complex their situation, resolve matters
                  sensitively, swiftly and affordably.
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
};

export default Mediator1;
