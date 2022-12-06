import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fmcLogo from '../assets/logos/family-mediation-council-accredited-mediator-logo.jpg';
// import fmcGenericLogo from '../assets/logos/family-mediation-council-logo.png';
// import fmcLogoChildInclusive from '../assets/logos/family-mediation-council-accredited-mediator-logo.jpg';
import carolineHeadshot from '../assets/images/mediators/caroline.webp';

const Mediator4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const tabs = document.querySelectorAll('.tabs li');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((item) => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;

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
      <button className="mediators-back-button pl-4 pt-1 pb-2 ">
        <Link to={'/ourmediators'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i>
            {''} Our Mediators
          </span>
        </Link>
      </button>

      <div className="content pt-0 ">
        <div className="tabs is-centered ">
          <ul>
            <li id="kate-brown-tab" className="subtitle">
              <Link to={'/katebrown'}>Kate Brown</Link>
            </li>
            <li id="kathleen-straub-tab" className="subtitle">
              <Link to={'/kathleenstraub'}>Kathleen Straub</Link>
            </li>
            <li id="jules-waring-tab" className="subtitle">
              <Link to={'/juleswaring'}>Jules Waring</Link>
            </li>
            <li
              id="caroline-dunne-tab"
              className="is-active subtitle"
              data-target="caroline-dunne"
            >
              <a>Caroline Dunne</a>
            </li>
          </ul>
        </div>
        <div className="columns is-variable is-12">
          <div className="column is-12-tablet">
            <div className="content-mediators  ">
              <div id="tab-content">
                <div id="caroline-dunne">
                  <div className="columns pt-4 ">
                    <div className="column is-4  has-text-centered   ">
                      <img
                        src={carolineHeadshot}
                        alt="Caroline Dunne"
                        id="about-image"
                        className="mediator-image has-text-centered about-image "
                      />
                      <div id="mediator-contact-info" className="subtitle">
                        <p id="fontawesome-styling" className=" pt-4  ">
                          <a href="tel:07870 796618"> 07870 796618</a>
                          <br />
                          <a
                            id="fontawesome-styling"
                            className=""
                            href="mailto:caroline@bridgefamilymediation.co.uk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>
                              {' '}
                              <a>caroline@bridgefamilymediation.co.uk</a>
                            </span>
                          </a>
                        </p>
                        <div
                          id="mediator-logos"
                          className="mediator-logos pt-5 "
                        >
                          <img href="" src={fmcLogo} alt="FMC Logo" />
                          {/* <img href="" src={fmcGenericLogo} alt="FMC Logo" /> */}
                        </div>
                      </div>
                    </div>
                    <div className="column is-8 pr-5 pl-5 ">
                      <div className="">
                        <div id="media" className="media ">
                          <div className="media-content ">
                            <p className="title is-4 ">Caroline Dunne</p>
                          </div>
                        </div>
                        <div
                          id="mediator-contact-info-mobile"
                          className="subtitle mediator-contact-info-mobile has-text-centered"
                        >
                          <p id="fontawesome-styling" className=" pt-4  ">
                            <a className="pr-2" href="tel:07870 796618">
                              {' '}
                              <i className="fa-solid fa-phone "></i>
                            </a>
                            <a
                              id="fontawesome-styling"
                              className="pl-4"
                              href="mailto:caroline@bridgefamilymediation.co.uk"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa-solid fa-envelope "></i>
                            </a>
                          </p>
                        </div>
                        <p className="subtitle is-5 pt-5 has-text-centered">
                          Battersea | Sutton | Wimbledon
                        </p>
                      </div>

                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          I am family mediator accredited with the Family
                          Mediation Council (FMCA) and a member of the Family
                          Mediators&apos; Association (FMA).
                        </p>
                        <p>
                          I studied law and qualified as a solicitor originally
                          working in the City for a commercial practice
                          specialising in asset finance transactions. I took a
                          break from my career to raise a family and during this
                          time studied for a Master&apos;s in Child Law &
                          Policy. On returning to work I took a change of
                          direction and began working as an advisor for Citizens
                          Advice. This introduced me to a wide variety of
                          different problems and people, and I enjoyed my
                          problem-solving and information-giving roles.{' '}
                        </p>
                        <p>
                          During my time at Citizens Advice and because of my
                          interest in children and the law I became aware how
                          family breakdown can have a huge impact on a
                          child&apos;s life, and I decided to train as a family
                          mediator in 2017. Research shows that parental
                          conflict upon separation can be damaging for children,
                          and I believe that mediation provides a space for
                          couples to work together to resolve their differences
                          and so reduce conflict.
                        </p>
                        <p>
                          After several years working in a busy legal aid
                          practice, I joined Bridge Family Mediation in 2022
                          having known members of the Bridge Team for several
                          years. I aim to be helpful, informative, and
                          approachable, and to engage with couples to find
                          practical and realistic solutions that work for the
                          whole family.
                        </p>
                      </div>
                      <div
                        id="mediator-logos-mobile"
                        className="mediator-logos-mobile  "
                      >
                        <img href="" src={fmcLogo} alt="FMC Logo" /> */
                        {/* <img
                          href=""
                          src={fmcGenericLogo}
                          alt="FMC Generic Logo"
                        /> */}
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

export default Mediator4;
