import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import fmcLogo from '../assets/logos/fmcLogo.jpg';
import fmcLogoChildInclusive from '../assets/logos/fmcLogoChildInclusive.jpg';

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
      {/* <button className="back-button pl-4 pt-1 " onClick={() => navigate(-1)}>
        <span>
          <i className="fa-solid fa-arrow-left "></i>
          {''} Our Mediators
        </span>
      </button> */}

      <div className="content  ">
        <div className="tabs is-centered ">
          <ul>
            <li className="subtitle" data-target="kate-brown">
              <a>Kate Brown</a>
            </li>
            <li className="subtitle" data-target="kathleen-straub">
              <a>Kathleen Straub</a>
            </li>
            <li className="is-active subtitle" data-target="jules-waring">
              <a>Jules Waring</a>
            </li>
            <li className="subtitle" data-target="caroline-dunne">
              <a>Caroline Dunne</a>
            </li>
          </ul>
        </div>
        <div className="columns is-variable is-12">
          <div className="column is-12-tablet">
            <div className="content  ">
              <div id="tab-content">
                <div id="kate-brown" className="is-hidden">
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
                            <p className="title is-4 ">Kate Brown</p>
                          </div>
                        </div>

                        <p className="subtitle is-5 pt-5 has-text-centered">
                          Balham | Barnes | Battersea
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          I completed my mediation training with the Family
                          Mediators&#39; Association in 2015 and I am fully
                          accredited by the Family Mediation Council. I am also
                          qualified in Child Inclusive Mediation and can see
                          children aged 10 and over within the mediation
                          process.
                        </p>
                        <p>
                          I have a special interest in child development and
                          working with families to prioritise the emotional
                          wellbeing of their children. After a long first career
                          in the media, managing a team of creative people, much
                          of my professional experience has been about helping
                          people work together, resolve conflict and fulfil
                          their potential.{' '}
                        </p>{' '}
                        <p>
                          Since qualifying as a family mediator, I have been
                          able to use these skills to guide people through
                          separation and divorce, to try and minimise the
                          distress of this challenging time and reach fair and
                          lasting agreements. I am committed to helping
                          families, however complex their situation, resolve
                          matters sensitively, swiftly and affordably.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="kathleen-straub" className="is-hidden">
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
                              kathleenstraub@bridgefamilymediation.co.uk
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
                          Family Mediation Council accreditation. I am also a
                          qualified Professional Practice Consultant,
                          supervising other family mediators in their
                          professional development.
                        </p>
                        <p>
                          I have wide experience and knowledge of family law,
                          having worked for 20 years as a family solicitor. I
                          now work full time in mediation, covering all issues,
                          and have particular experience of dealing with complex
                          cases involving sensitive issues. I am also qualified
                          to see children within the mediation process. My
                          approach is to listen, guide and explore options in a
                          calm and balanced environment.
                        </p>{' '}
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="jules-waring">
                  <div className="columns pt-4 ">
                    <div className="column is-4  has-text-centered   ">
                      <img
                        src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                        alt="Placeholder image"
                        className="mediator-image has-text-centered about-image "
                      />
                      <div className="subtitle">
                        <p id="fontawesome-styling" className=" pt-4  ">
                          <a href="tel:07880 724658">
                            {' '}
                            <span id="mediator-contact-info">07880 724658</span>
                          </a>

                          <a
                            id="fontawesome-styling"
                            className=""
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
                          Balham | Barnes | Battersea
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          Like Kate, I had a career in media for over 30 years
                          before deciding to train as a family mediator.
                          I&apos;ve been responsible for running a team and
                          recruiting people, nurturing them through a
                          pressurised career path and being their support and
                          mentor. I feel these skills make me a highly
                          empathetic and successful mediator, where I can draw
                          on my experience to help families reach amicable and
                          long-lasting solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="caroline-dunne" className="is-hidden">
                  <div className="columns pt-4 ">
                    <div className="column is-4  has-text-centered   ">
                      <img
                        src="https://www.hagopsphotography.com/wp-content/uploads/2021/10/Female-LinkedIn-portrait.jpg"
                        alt="Placeholder image"
                        className="mediator-image has-text-centered about-image "
                      />
                      <div className="subtitle">
                        <p id="fontawesome-styling" className=" pt-4  ">
                          <a href="tel:07777 777777">
                            {' '}
                            <span id="mediator-contact-info">07777 777777</span>
                          </a>

                          <a
                            id="fontawesome-styling"
                            className=""
                            href="mailto:carolinedunne@bridgefamilymediation.co.uk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span id="mediator-contact-info">
                              {' '}
                              carolinedunne@bridgefamilymediation.co.uk
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
                          Balham | Barnes | Battersea
                        </p>
                      </div>
                      <div className="mediator-text pt-5 pb-5 ">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ipsam totam quo eveniet illo nihil eos placeat
                          voluptate enim repudiandae! Officia eaque vero ab quam
                          saepe quidem, inventore reprehenderit dolores ea optio
                          unde nesciunt, beatae veniam tenetur! Et quis quos non
                          sit qui, nemo eveniet nulla nam labore quam? Optio
                          obcaecati rerum, veniam sint laudantium tempora ea!
                          Atque aliquid quam nostrum pariatur saepe eius
                          incidunt. Quidem necessitatibus consequatur vel natus
                          dolores autem aliquid ipsam possimus, in voluptates,
                          illo sunt animi tenetur.
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
