import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mediator1 = () => {
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
                  <p className="title is-1 ">Kate Brown</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-6">Balham | Barnes | Battersea</p>
            </div>
            <div className="mediator-text p-5 ">
              <p>
                I have a special interest in child development and working with
                families to prioritise the emotional wellbeing of their
                children. After a long first career in the media, managing a
                team of creative people, much of my professional experience has
                been about helping people work together, resolve conflict and
                fulfil their potential.{' '}
              </p>{' '}
              <br></br>
              <p>
                Since qualifying as a family mediator, I have been able to use
                these skills to guide people through separation and divorce, to
                try and minimise the distress of this challenging time and reach
                fair and lasting agreements. I am committed to helping families,
                however complex their situation, resolve matters sensitively,
                swiftly and affordably.
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mediator1;
