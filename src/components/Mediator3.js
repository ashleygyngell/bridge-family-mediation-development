import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mediator3 = () => {
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
                  <p className="title is-1 ">Jules Waring</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-5">Balham | Barnes | Battersea</p>
            </div>
            <div className="mediator-text p-5 ">
              <p>
                I qualified as a Family Mediator with the Family Mediators&#39;
                Association in 2017 and feel passionate about helping people
                solve their family disputes at one of the most emotionally
                difficult time of their lives. Like Kate, I had a career in
                media for over 30 years before deciding to train as a family
                mediator.
              </p>{' '}
              <br></br>
              <p>
                I&#39;ve been responsible for running a team and recruiting
                people, nurturing them through a pressurised career path and
                being their support and mentor. I feel these skills make me a
                highly empathetic and successful mediator, where I can draw on
                my experience to help families reach amicable and long-lasting
                solutions.
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mediator3;
