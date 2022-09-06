import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mediator2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <body>
        <button className="back-button pl-4 pt-2 " onClick={() => navigate(-1)}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> Back
          </span>
        </button>
        <div className="columns pt-6">
          <div className="column is-4 pl-6 pt-6">
            <img
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt="Placeholder image"
              className="mediator-image"
            />
          </div>
          <div className="column is-8 pr-6 ">
            <div className=" has-text-centered ">
              <div className="media">
                <div className="media-content ">
                  <p className="title is-1 ">Kathleen Straub</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-5">Balham | Barnes | Battersea</p>
            </div>
            <div className="mediator-text p-5 ">
              <p>
                I trained as a Family Mediator with the Family Mediators&#39;
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
