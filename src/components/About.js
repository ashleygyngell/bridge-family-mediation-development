import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <body>
        <div className="columns ml-5 mr-5 pt-6">
          {/* Person 1 */}
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

              <div className="card-content">
                <Link to={'/katebrown'}>
                  <div className="media">
                    <div className="media-content has-text-centered">
                      <p className="title is-4">Kate Brown</p>
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

          {/* Person 2 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-2by2">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <p className="title is-4">Kathleen Straub</p>
                    <p className="subtitle is-6">
                      Balham | Barnes | Battersea{' '}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    I trained as a Family Mediator with the Family
                    Mediators&#39; Association in 2013 and hold full Family
                    Mediation Council accreditation. I am also a qualified
                    Professional Practice Consultant, supervising other family
                    mediators in their professional development. I have wide
                    experience and knowledge of family law, having worked for 20
                    years as a family solicitor. I now work full time in
                    mediation, covering all issues, and have particular
                    experience of dealing with complex cases involving sensitive
                    issues. I am also qualified to see children within the
                    mediation process. My approach is to listen, guide and
                    explore options in a calm and balanced environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Person 3 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-2by2">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <p className="title is-4">Jules Waring</p>
                    <p className="subtitle is-6">
                      Balham | Barnes | Battersea{' '}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    I qualified as a Family Mediator with the Family
                    Mediators&#39; Association in 2017 and feel passionate about
                    helping people solve their family disputes at one of the
                    most emotionally difficult time of their lives. Like Kate, I
                    had a career in media for over 30 years before deciding to
                    train as a family mediator. I&#39;ve been responsible for
                    running a team and recruiting people, nurturing them through
                    a pressurised career path and being their support and
                    mentor. I feel these skills make me a highly empathetic and
                    successful mediator, where I can draw on my experience to
                    help families reach amicable and long-lasting solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Person 4 */}
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="is-2by2">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content has-text-centered">
                    <p className="title is-4">Caroline Dunne</p>
                    <p className="subtitle is-6">
                      Balham | Barnes | Battersea{' '}
                    </p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati distinctio quam maiores excepturi corrupti
                    recusandae, quaerat, eligendi non doloremque sint, corporis
                    commodi sunt ad maxime vero! Accusantium, saepe! Perferendis
                    architecto modi necessitatibus nisi adipisci provident in
                    magnam deleniti distinctio eligendi ex itaque consectetur,
                    maxime atque veniam accusantium, debitis ad. Aut!
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
