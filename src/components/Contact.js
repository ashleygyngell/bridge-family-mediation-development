import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content mt-2   ">
        <div className="title is-4 mr-6 ml-6 ">Contact us</div>

        <div className=" pt-5 pl-6 pr-6">
          <br />
          <p className="mediator-text ">
            <strong>Email: </strong>
            <a
              id="fontawesome-styling"
              className=""
              href="mailto:info@bridgefamilymediation.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              <span id="mediator-contact-info-contact">
                {' '}
                <a>info@bridgefamilymediation.co.uk</a>
              </span>
            </a>
          </p>
          <p className="mediator-text ">
            <strong>Phone: </strong>
            <span id="mediator-contact-info-contactpage">
              {' '}
              Click <Link to={'/ourmediators'}>here </Link>
              for our mediators.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
