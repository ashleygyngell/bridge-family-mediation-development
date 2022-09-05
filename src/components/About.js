import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  // After meeting today, the plan is for there to be a block of all mediators and then once you have clicked through you are taken to the individual page with a full breakdown of the mediator. Phone link and email neccesary. Need a bigger return button.
  return (
    <>
      <body>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <div className="columns ml-5 mr-5 pt-6">
          {/* Mediator 1 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <Link to={'/katebrown'}>
                  <figure className="image is-2by2">
                    <img
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>

              <div className="card-content mb-6">
                <Link to={'/katebrown'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-5">Kate Brown</p>
                      <p className="subtitle is-6">
                        Balham | Barnes | Battersea{' '}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="content pt-5">
                  <p>
                    I completed my mediation training with the Family
                    Mediators&#39; Association in 2015 and I am fully accredited
                    by the Family Mediation Council. I am also qualified in
                    Child Inclusive Mediation and can see children aged 10 and
                    over within the mediation process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 2 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <Link to={'/kathleenstraub'}>
                  <figure className="image is-2by2">
                    <img
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content mb-6">
                <Link to={'/kathleenstraub'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-5">Kathleen Straub</p>
                      <p className="subtitle is-6">
                        Balham | Barnes | Battersea{' '}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="content pt-5">
                  <p>
                    I trained as a Family Mediator with the Family
                    Mediators&#39; Association in 2013 and hold full Family
                    Mediation Council accreditation. I am also a qualified
                    Professional Practice Consultant, supervising other family
                    mediators in their professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 3 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <Link to={'/juleswaring'}>
                  <figure className="image is-2by2">
                    <img
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content mb-6">
                <Link to={'/juleswaring'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-5">Jules Waring</p>
                      <p className="subtitle is-6">
                        Balham | Barnes | Battersea{' '}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="content pt-5">
                  <p>
                    I qualified as a Family Mediator with the Family
                    Mediators&#39; Association in 2017 and feel passionate about
                    helping people solve their family disputes at one of the
                    most emotionally difficult time of their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 4 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <Link to={'/carolinedunne'}>
                  <figure className="image is-2by2">
                    <img
                      src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </Link>
              </div>
              <div className="card-content mb-6">
                <Link to={'/carolinedunne'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-5">Caroline Dunne</p>
                      <p className="subtitle is-6">
                        Balham | Barnes | Battersea{' '}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="content pt-5">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis blanditiis ducimus nam quaerat sit deleniti,
                    nesciunt animi obcaecati. Exercitationem nam, rem minima
                    enim, unde, harum possimus eos similique eveniet eligendi
                    dicta! Nulla rerum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default About;
