import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fmcLogo from '../assets/logos/family-mediation-council-logo.png';
import fmcLogoChildInclusive from '../assets/logos/family-mediation-council-child-inclusive-mediator-logo.jpg';
import julesHeadshot from '../assets/images/mediators/jules.jpeg';

const Mediator3 = () => {
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
            <li className="subtitle">
              <Link to={'/kathleenstraub'}>Kathleen Straub</Link>
            </li>
            <li className="is-active subtitle" data-target="jules-waring">
              <a>Jules Waring</a>
            </li>
            <li className="subtitle">
              <Link to={'/carolinedunne'}>Caroline Dunne</Link>
            </li>
          </ul>
        </div>
        <div className="columns is-variable is-12">
          <div className="column is-12-tablet">
            <div className="content-mediators  ">
              <div id="tab-content">
                <div id="jules-waring">
                  <div className="columns pt-4 ">
                    <div className="column is-4  has-text-centered   ">
                      <img
                        src={julesHeadshot}
                        alt="Jules Waring Headshot"
                        id="about-image"
                        className="mediator-image has-text-centered about-image "
                      />
                      <div className="subtitle">
                        <p id="fontawesome-styling" className=" pt-4  ">
                          <a href="tel:07880 724658">
                            {' '}
                            <span id="mediator-contact-info">07880 724658</span>
                          </a>
                          <br />
                          <a
                            id="fontawesome-styling"
                            className=""
                            href="mailto:juleswaring@bridgefamilymediation.co.uk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span id="mediator-contact-info">
                              {' '}
                              <a>juleswaring@bridgefamilymediation.co.uk</a>
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
                            <p className="title is-4 ">Jules Waring</p>
                          </div>
                        </div>

                        <p className="subtitle is-5 pt-5 has-text-centered">
                          Balham | Clapham | Streatham
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          <p>
                            I completed my training as a family mediator with
                            the FMA in 2017 and have been practicing since then.
                            My professional ambition is to help people make fair
                            decisions which leave neither party aggrieved and
                            enable them to be loving parents to the children
                            they adore.
                          </p>
                          <p>
                            I was practicing as a Family Mediator alongside my
                            main job until late 2021. After a very happy 36 year
                            career in television (first as a programme maker,
                            then running the recruitment department at a major
                            independent production company) I decided to focus
                            full time on mediation. In 2021, after a very happy
                            24 year career in television, first as a programme
                            maker then running the recruitment department at a
                            major independent television company, I decided to
                            leave to focus full time on mediating.
                          </p>
                          <p>
                            With my colleagues, we established Bridge Family
                            Mediation. I&apos;m dedicated to helping separating
                            couples work together to make the right choices as
                            their lives go through change.
                          </p>
                          <p>
                            Being a stepmother, I have first-hand knowledge of
                            how difficult it is for children to navigate their
                            parents&apos; separation.
                          </p>
                          <p>
                            I look forward to meeting you and hope that
                            I&apos;ll be able to help you find your way through
                            the various challenges of separation as you step
                            forward to the future.
                          </p>
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

export default Mediator3;
