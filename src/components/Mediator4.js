import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fmcLogo from '../assets/logos/family-mediation-council-accredited-mediator-logo.jpg';
// import fmcLogoChildInclusive from '../assets/logos/family-mediation-council-accredited-mediator-logo.jpg';
import carolineHeadshot from '../assets/images/mediators/caroline.jpeg';

const Mediator4 = () => {
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
      <button className="mediators-back-button pl-4 pt-1 ">
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
            <li className="subtitle">
              <Link to={'/katebrown'}>Kate Brown</Link>
            </li>
            <li className="subtitle">
              <Link to={'/kathleenstraub'}>Kathleen Straub</Link>
            </li>
            <li className="subtitle">
              <Link to={'/juleswaring'}>Jules Waring</Link>
            </li>
            <li className="is-active subtitle" data-target="caroline-dunne">
              <a>Caroline Dunne</a>
            </li>
          </ul>
        </div>
        <div className="columns is-variable is-12">
          <div className="column is-12-tablet">
            <div className="content  ">
              <div id="tab-content">
                <div id="caroline-dunne">
                  <div className="columns pt-4 ">
                    <div className="column is-4  has-text-centered   ">
                      <img
                        src={carolineHeadshot}
                        alt="Caroline Dunne Headshot"
                        id="about-image"
                        className="mediator-image has-text-centered about-image "
                      />
                      <div className="subtitle">
                        <p id="fontawesome-styling" className=" pt-4  ">
                          <a href="tel:07870 796618">
                            {' '}
                            <span id="mediator-contact-info">07870 796618</span>
                          </a>
                          <br />
                          <a
                            id="fontawesome-styling"
                            className=""
                            href="mailto:carolinedunne@bridgefamilymediation.co.uk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span id="mediator-contact-info">
                              {' '}
                              <a>carolinedunne@bridgefamilymediation.co.uk</a>
                            </span>
                          </a>
                        </p>
                        <div className="mediator-logos pt-5 ">
                          <img href="" src={fmcLogo} alt="FMC Logo" />
                        </div>
                      </div>
                    </div>
                    <div className="column is-8 pr-6 pl-5 ">
                      <div className="">
                        <div className="media ">
                          <div className="media-content ">
                            <p className="title is-4 ">Caroline Dunne</p>
                          </div>
                        </div>

                        <p className="subtitle is-5 pt-5 has-text-centered">
                          Battersea | Sutton | Wimbledon
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
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
                          problem-solving and information-giving roles. During
                          my time at Citizens Advice and because of my interest
                          in children and the law I became aware how family
                          breakdown can have a huge impact on a child&apos;s
                          life, and I decided to train as a family mediator in
                          2017. Research shows that parental conflict upon
                          separation can be damaging for children, and I believe
                          that mediation provides a space for couples to work
                          together to resolve their differences and so reduce
                          conflict.
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
