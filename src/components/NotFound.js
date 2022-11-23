import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import childWithFather from '../assets/images/child-with-father.png';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content has-text-centered  ">
        <div>
          <h1>Oops! You seem to be lost.</h1>{' '}
          <h3>Here are some helpful links: </h3>{' '}
          <h5>
            {' '}
            <Link to="/">Home</Link>
          </h5>
          <h5>
            {' '}
            <Link to="/whatismediation">What Is Mediation?</Link>
          </h5>
          <h5>
            {' '}
            <Link to="/ourmediators">Our Mediators</Link>
          </h5>
          <h5>
            {' '}
            <Link to="/contact">Contact Us</Link>
          </h5>
          <h5>
            {' '}
            <Link to="/faqs">FAQs</Link>
          </h5>
          <div className=" column mt-4 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile has-text-centered">
            <img
              id="mediation-breakdown-image"
              src={childWithFather}
              alt="Child with father on bridge"
            />
          </div>
        </div>
      </div>
    </>
  );
}
