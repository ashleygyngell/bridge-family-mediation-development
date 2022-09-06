import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // After meeting today, the plan is for there to be a block of all mediators and then once you have clicked through you are taken to the individual page with a full breakdown of the mediator. Phone link and email neccesary. Need a bigger return button.
  return (
    <>
      <body>
        <div className="columns ml-5 mr-5 pt-5 pb-5">
          {/* Mediator 1 */}
          <div className="column">
            <div id="mediator-card" className="card">
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

              <div className="card-content ">
                <Link to={'/katebrown'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">Kate Brown</p>
                    </div>
                  </div>
                </Link>
                <p className="subtitle is-6 has-text-centered pt-1 ">
                  Balham | Barnes | Battersea{' '}
                </p>

                <div className="content pt-4 ">
                  <p>
                    I completed my mediation training with the Family
                    Mediators&#39; Association in 2015 and I am fully accredited
                    by the Family Mediation Council. I am also qualified in
                    Child Inclusive Mediation and can see children aged 10 and
                    over within the mediation process.
                  </p>
                  <Link to={'/katebrown'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 2 */}
          <div className="column">
            <div id="mediator-card" className="card">
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
              <div className="card-content ">
                <Link to={'/kathleenstraub'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">Kathleen Straub</p>
                    </div>
                  </div>
                </Link>
                <p className="subtitle is-6 has-text-centered pt-1 ">
                  Putney | Southfields | Wandsworth{' '}
                </p>
                <div className="content pt-4">
                  <p>
                    I trained as a Family Mediator with the Family
                    Mediators&#39; Association in 2013 and hold full Family
                    Mediation Council accreditation. I am also a qualified
                    Professional Practice Consultant, supervising other family
                    mediators in their professional development.
                  </p>
                  <Link to={'/kathleenstraub'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 3 */}
          <div className="column">
            <div id="mediator-card" className="card">
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
              <div className="card-content">
                <Link to={'/juleswaring'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">Jules Waring</p>
                    </div>
                  </div>
                </Link>
                <p className="subtitle is-6 has-text-centered pt-1 ">
                  Clapham | Balham | Streatham{' '}
                </p>
                <div className="content pt-4">
                  <p>
                    I qualified as a Family Mediator with the Family
                    Mediators&#39; Association in 2017 and feel passionate about
                    helping people solve their family disputes at one of the
                    most emotionally difficult time of their lives.
                  </p>
                  <Link to={'/juleswaring'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mediator 4 */}
          <div className="column">
            <div id="mediator-card" className="card">
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
              <div className="card-content">
                <Link to={'/carolinedunne'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title ">Caroline Dunne</p>
                    </div>
                  </div>
                </Link>
                <p className="subtitle is-6 has-text-centered pt-1 ">
                  Battersea | Richmond | Wimbledon{' '}
                </p>
                <div className="content pt-4">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis blanditiis ducimus nam quaerat sit deleniti,
                    nesciunt animi obcaecati. Exercitationem nam, rem minima
                    enim, unde, harum possimus eos similique eveniet eligendi
                    dicta! Nulla rerum.
                  </p>
                  <Link to={'/carolinedunne'}>
                    <div id="read-more">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </Link>
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
