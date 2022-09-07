import React from 'react';
import { useNavigate } from 'react-router-dom';
import fmcLogo from '../assets/logos/fmcLogo.jpg';
import fmcLogoChildInclusive from '../assets/logos/fmcLogoChildInclusive.jpg';

const Mediator2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="back-button pl-4 pt-1 " onClick={() => navigate(-1)}>
        <span>
          <i className="fa-solid fa-arrow-left "></i> Back
        </span>
      </button>
      <body className="pl-6 pr-6">
        <div className="columns pt-6 pl-6 ">
          <div className="column is-4 about-image ">
            <img
              src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-Headshot.jpg"
              alt="Placeholder image"
              className="mediator-image has-text-centered"
            />
            <div>
              <p id="fontawesome-styling" className="subtitle is-5 pt-5 pb-2">
                <i className="fa-solid fa-phone is-black"></i>
                <a href="tel:0733378901">
                  {' '}
                  <span id="mediator-contact-info">07333 123456</span>
                </a>
              </p>

              <a
                id="fontawesome-styling"
                className="subtitle "
                href="mailto:kate@bridgefamilymediation.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-envelope"></i>
                <span id="mediator-contact-info">
                  {' '}
                  kathleen@bridgefamilymediation.co.uk
                </span>
              </a>
            </div>
          </div>
          <div className="column is-8 pr-6 ">
            <div className="">
              <div className="media">
                <div className="media-content ">
                  <p className="title is-1 ">Kathleen Straub</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-5 has-text-centered">
                Balham | Barnes | Battersea
              </p>
            </div>
            <div className="mediator-text pt-5 pb-5 ">
              <p>
                I trained as a Family Mediator with the Family Mediators’
                Association in 2013 and hold full Family Mediation Council
                accreditation. I am also a qualified Professional Practice
                Consultant, supervising other family mediators in their
                professional development.
              </p>{' '}
              <br></br>
              <p>
                I have wide experience and knowledge of family law, having
                worked for 20 years as a family solicitor. I now work full time
                in mediation, covering all issues, and have particular
                experience of dealing with complex cases involving sensitive
                issues. I am also qualified to see children within the mediation
                process. My approach is to listen, guide and explore options in
                a calm and balanced environment.
              </p>
              <div className="mediator-logos pt-4 ">
                <img src={fmcLogo} alt="FMC Logo" />
                <img
                  src={fmcLogoChildInclusive}
                  alt="FMC Child Mediation Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mediator2;
