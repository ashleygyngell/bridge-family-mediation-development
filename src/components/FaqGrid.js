import React from 'react';
import { Link } from 'react-router-dom';

const FaqGrid = () => {
  return (
    <>
      <body className="pr-5 pl-5">
        <div className="columns ml-5 mr-5 pt-5 pr-6 pl-6">
          {/* Question 1 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/howdoesitwork'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3">How does it work?</p>
                    </div>
                  </div>
                </Link>

                <div className="pt-4 pb-2 is-hidden-mobile ">
                  <p>
                    Family Mediation is a voluntary process, where separating or
                    divorcing couples come together to have a discussion &#8212;
                    not an argument &#8212; about their future arrangements, in
                    a safe, well-ordered and professional environment.
                  </p>
                  <Link to={'/howdoesitwork'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whatismediation'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3 ">What is mediation?</p>
                    </div>
                  </div>
                </Link>

                <div className=" pt-4 pb-2 is-hidden-mobile">
                  <p>
                    Family Mediation is a voluntary process, where separating or
                    divorcing couples come together to have a discussion &#8212;
                    not an argument &#8212; about their future arrangements, in
                    a safe, well-ordered and professional environment.
                  </p>
                  <Link to={'/whatismediation'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns ml-5 mr-5   pr-6 pl-6">
          {/* Question 3 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whodowehelp'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3 ">Who do we help?</p>
                    </div>
                  </div>
                </Link>

                <div className="pt-4 pb-2 is-hidden-mobile">
                  <p>
                    Seperating couples, with or without children - married or
                    unmarried.
                  </p>
                  <p>
                    Same-sex couples, whether or not in a marriage or civil
                    partnership.
                  </p>
                  <p>Children who are struggling to...</p>

                  <Link to={'/whodowehelp'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whatmaybediscussed'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3 ">What may be discussed?</p>
                    </div>
                  </div>
                </Link>

                <div className=" pt-4 pb-2 is-hidden-mobile">
                  <p>
                    How property, pensions, other financial assets and debts are
                    to be divided up and where both parties will live following
                    divorce.
                  </p>
                  <p>Where the children will live when parents seperate</p>
                  <p>How the children will share their time between...</p>

                  <Link to={'/whatmaybediscussed'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns ml-5 mr-5  pr-6 pl-6">
          {/* Question 5 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/ismediationlegallybinding'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3">
                        Is mediation legally binding?{' '}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="pt-4 pb-2 is-hidden-mobile">
                  <p>The mediation agreement is not legally binding.</p>

                  <Link to={'/ismediationlegallybinding'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Question 6 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whychoooseus'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3 ">Why choose us?</p>
                    </div>
                  </div>
                </Link>

                <div className=" pt-4 pb-2 is-hidden-mobile">
                  <p>
                    We are a dedicated family mediation practice and
                    wholeheartedly believe that mediation, not legal
                    proceedings, is the best way to resolve disputes arising out
                    of relationship breakdown.
                  </p>

                  <Link to={'/whychooseus'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns ml-5 mr-5  pb-5 pr-6 pl-6">
          {/* Question 7 */}
          <div className="column is-6-desktop is-12-tablet is-12-mobile ">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whatdoesitcost'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-3">What does it cost? </p>
                    </div>
                  </div>
                </Link>

                <div className="pt-4 pb-2 is-hidden-mobile">
                  <p>
                    At Bridge Mediation, we are committed to offering value for
                    money. Costs are made clear at the outset and clients are
                    asked to pay by bank transfer in advance of meetings. We do
                    not request funds on account and will not present you with a
                    large unexpected bill at the end. We are happy to discuss
                    individual circumstances based on your ability to pay.
                  </p>

                  <Link to={'/whatdoesitcost'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Question 8 */}
          {/* <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whychoooseus'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">Why choose us?</p>
                    </div>
                  </div>
                </Link>

                <div className=" pt-4 pb-2 is-hidden-mobile">
                  <p>
                    We are a dedicated family mediation practice and
                    wholeheartedly believe that mediation, not legal
                    proceedings, is the best way to resolve disputes arising out
                    of relationship breakdown.
                  </p>

                  <Link to={'/whychooseus'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* Bottom */}
        </div>
      </body>
    </>
  );
};

export default FaqGrid;
