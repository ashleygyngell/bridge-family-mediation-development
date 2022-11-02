import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import fmcLogo from '../assets/logos/family-mediation-council-accredited-mediator-logo.jpg';
import fmcLogoChildInclusive from '../assets/logos/family-mediation-council-child-inclusive-mediator-logo.jpg';

const Mediator1 = () => {
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
        {' '}
        <div className="tabs is-centered">
          <ul>
            <li className="is-active subtitle" data-target="kate-brown">
              <a>Kate Brown</a>
            </li>

            <li className="subtitle">
              <Link to={'/kathleenstraub'}>Kathleen Straub</Link>
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
                <div id="kate-brown">
                  <div className="columns pt-4 ">
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
                              <a>katebrown@bridgefamilymediation.co.uk</a>
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
                            <p className="title is-4 ">Kate Brown</p>
                          </div>
                        </div>

                        <p className="subtitle is-5 pt-5 has-text-centered">
                          Barnes | Chiswick | Richmond
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          I am an experienced Family Mediator, fully accredited
                          by the FMCA, and comitted to helping families resolve
                          highly sensitive matters arising from divorce and
                          separation, including financial & property issues and
                          arrangement for children.
                        </p>
                        <p>
                          I have a special interest in child development and in
                          helping families going through a family breakdown
                          prioritise the emotional wellbeing of their children.
                          I am qualified in Child Inclusive Mediation, which
                          means I can also see children aged 10 and over within
                          the mediation process, to enable them to express their
                          views and have a say in the decisions that are being
                          made for them.
                        </p>{' '}
                        <p>
                          After a first career in the media, managing a team of
                          creative people, much of my professional experience
                          has been about helping people work together to fulfil
                          their potential and resolve conflict. Since qualifying
                          as a family mediator in 2015, I have been able to use
                          these skills to guide people through separation and
                          divorce, to try and minimise distress and enable them
                          to reach fair and lasting agreements.
                        </p>
                        <p>
                          I am committed to helping families, however complex
                          their situation, to resolve matters sensitively,
                          swiftly and affordably.
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

export default Mediator1;
