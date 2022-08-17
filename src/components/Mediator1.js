import React from 'react';
import { Link } from 'react-router-dom';

const Mediator1 = () => {
  return (
    <body>
      <Link to={'/about'}>
        <p>Back</p>
      </Link>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div className="content">
            I have a special interest in child development and working with
            families to prioritise the emotional wellbeing of their children.
            After a long first career in the media, managing a team of creative
            people, much of my professional experience has been about helping
            people work together, resolve conflict and fulfil their potential.
            Since qualifying as a family mediator, I have been able to use these
            skills to guide people through separation and divorce, to try and
            minimise the distress of this challenging time and reach fair and
            lasting agreements. I am committed to helping families, however
            complex their situation, resolve matters sensitively, swiftly and
            affordably.<a>@bulmaio</a>.<a href="#">#css</a>{' '}
            <a href="#">#responsive</a>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Mediator1;
