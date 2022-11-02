import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fmcLogo from '../assets/logos/family-mediation-council-accredited-mediator-logo.jpg';
import fmcLogoChildInclusive from '../assets/logos/family-mediation-council-child-inclusive-mediator-logo.jpg';

const Mediator2 = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((item) => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        // console.log(target);
        tabContentBoxes.forEach((box) => {
          if (box.getAttribute('id') === target) {
            box.classList.remove('is-hidden');
          } else {
            box.classList.add('is-hidden');
          }
        });
      });
    });
  });
  // const navigate = useNavigate();
  return (
    <>
      <Link to={'/ourmediators'}>
        <button className="mediators-back-button pl-4 pt-1 ">
          <span>
            <i className="fa-solid fa-arrow-left "></i>
            {''} Our Mediators
          </span>
        </button>
      </Link>

      <div className="content pt-0  ">
        <div className="tabs is-centered ">
          <ul>
            <li className="subtitle">
              <Link to={'/katebrown'}>Kate Brown</Link>
            </li>
            <li className="is-active subtitle" data-target="kathleen-straub">
              <a>Kathleen Straub</a>
            </li>
            <li className="subtitle">
              <Link to={'/juleswaring'}>Jules Waring</Link>
            </li>
            <li className="subtitle">
              <Link to={'/carolinedunne'}>Caroline Dunne</Link>
            </li>
          </ul>
        </div>
        <div className="columns is-variable is-12">
          <div className="column is-12-tablet">
            <div className="content  ">
              <div id="tab-content">
                <div id="kathleen-straub">
                  <div className="columns pt-4 ">
                    <div className="column is-4  has-text-centered   ">
                      <img
                        src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                        alt="Placeholder image"
                        className="mediator-image has-text-centered about-image "
                      />
                      <div className="subtitle">
                        <p id="fontawesome-styling" className=" pt-4  ">
                          <a href="tel:07957 663091">
                            {' '}
                            <span id="mediator-contact-info">07957 663091</span>
                          </a>

                          <a
                            id="fontawesome-styling"
                            className=""
                            href="mailto:kathleenstraub@bridgefamilymediation.co.uk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span id="mediator-contact-info">
                              {' '}
                              <a>kathleenstraub@bridgefamilymediation.co.uk</a>
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
                            <p className="title is-4 ">Kathleen Straub</p>
                          </div>
                        </div>

                        <p className="subtitle is-5 pt-5 has-text-centered">
                          Balham | Barnes | Battersea
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          I trained as a Family Mediator with the Family
                          Mediators&apos; Association in 2013 and hold full
                          Family Mediation Council accreditation. I am qualified
                          as a Professional Practice Consultant, supervising
                          other family mediators in their professional
                          development.
                        </p>
                        <p>
                          I am also qualified to meet with children within the
                          mediation process.
                        </p>
                        <p>
                          I have wide experience and knowledge of family law,
                          having worked for 20 years as a family solicitor. I
                          now work full time as a family mediator, covering all
                          issues, and have particular experience of dealing with
                          complex cases involving sensitive issues.
                        </p>
                        <p>
                          My approach is to listen, guide and explore options in
                          a calm and balanced environment. My aim is to help
                          people navigate through a separation constructively
                          and creatively, improving communication and helping
                          them work towards co-parenting or reaching a financial
                          settlement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mediator2;
