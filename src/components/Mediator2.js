import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mediator2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <body>
        <div className="columns">
          <div className="column">
            <button onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <div className="card" id="mediator-image">
              <div className="card-content ">
                <figure className="image-left">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="Placeholder image"
                    className="mediator-image"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card-content has-text-centered">
              <div className="media ">
                <div className="media-content">
                  <p className="title is-1 ">Kathleen Straub</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-6">Balham | Barnes | Battersea</p>
            </div>
            <div className="mediator-text p-5 ">
              <p>
                I trained as a Family Mediator with the Family Mediators’
                Association in 2013 and hold full Family Mediation Council
                accreditation. I am also a qualified Professional Practice
                Consultant, supervising other family mediators in their
                professional development.
              </p>{' '}
              <br></br>
              <p>
                I have wide experience and knowledge of family law, having
                worked for 20 years as a family solicitor. I now work full time
                in mediation, covering all issues, and have particular
                experience of dealing with complex cases involving sensitive
                issues. I am also qualified to see children within the mediation
                process. My approach is to listen, guide and explore options in
                a calm and balanced environment.
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mediator2;
