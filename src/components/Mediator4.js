import React from 'react';
import { useNavigate } from 'react-router-dom';
import fmcLogo from '../assets/logos/fmcLogo.jpg';
// import fmcLogoChildInclusive from '../assets/logos/fmcLogoChildInclusive.jpg';

const Mediator4 = () => {
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
              src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Company-linkedIn-photo.jpg"
              alt="Placeholder image"
              className="mediator-image has-text-centered"
            />
            <div>
              <p id="fontawesome-styling" className="subtitle is-5 pt-5 pb-2">
                <i className="fa-solid fa-phone is-black"></i>
                <a href="tel:00000 00000">
                  {' '}
                  <span id="mediator-contact-info">00000 00000</span>
                </a>
              </p>

              <a
                id="fontawesome-styling"
                className="subtitle "
                href="mailto:caroline@bridgefamilymediation.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-envelope"></i>
                <span id="mediator-contact-info">
                  {' '}
                  carolinedunne@bridgefamilymediation.co.uk
                </span>
              </a>
            </div>
          </div>
          <div className="column is-8 pr-6 ">
            <div className="">
              <div className="media">
                <div className="media-content ">
                  <p className="title is-1 ">Caroline Dunne</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-5 has-text-centered">
                Balham | Barnes | Battersea
              </p>
            </div>
            <div className="mediator-text pt-5 pb-5 ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                quos quam cum voluptatum sint. Eius optio porro dignissimos
                doloribus odio reprehenderit qui, fuga quae saepe nulla debitis,
                deleniti sunt modi.
              </p>{' '}
              <br></br>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis aliquam obcaecati aperiam qui nisi dolorum dolore
                eaque sed ad quas voluptate neque a dignissimos, corrupti porro
                molestiae architecto aliquid voluptatum animi est. Natus
                sapiente rem ullam saepe. Quas, ducimus ratione.
              </p>
              <div className="mediator-logos pt-4 ">
                <img src={fmcLogo} alt="FMC Logo" />
                {/* <img
                  src={fmcLogoChildInclusive}
                  alt="FMC Child Mediation Logo"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mediator4;
