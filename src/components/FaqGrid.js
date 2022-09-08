import React from 'react';
import { Link } from 'react-router-dom';

const FaqGrid = () => {
  return (
    <>
      <body>
        <div className="columns ml-5 mr-5 pt-6 pr-6 pl-6">
          {/* Question 1 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/howdoesitwork'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">How does it work?</p>
                    </div>
                  </div>
                </Link>

                <div className="content pt-4 pb-2 is-hidden-mobile ">
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
                      <p className="title ">What is mediation?</p>
                    </div>
                  </div>
                </Link>

                <div className="content pt-4 pb-2 is-hidden-mobile">
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
        <div className="columns ml-5 mr-5  pb-4 pr-6 pl-6">
          {/* Question 3 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whodowehelp'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">Who do we help?</p>
                    </div>
                  </div>
                </Link>

                <div className="content pt-4 pb-2 is-hidden-mobile">
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

          {/* Question 3 */}
          <div className="column">
            <div id="faq-card" className="card">
              <div className="card-content ">
                <Link to={'/whatmaybediscussed'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">What may be discussed?</p>
                    </div>
                  </div>
                </Link>

                <div className="content pt-4 pb-2 is-hidden-mobile">
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

          {/* Bottom */}
        </div>
      </body>
    </>
  );
};

export default FaqGrid;
