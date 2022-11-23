import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content mt-2 mr-6 ml-6 ">
        <div className="title is-4 ">Contact us</div>

        <div className="content  ">
          <form
            action="mailto:admin@bridgefamilymediation.co.uk"
            method="post"
            name="EmailForm"
            className=""
          >
            <div className="field">
              <label
                htmlFor="name"
                className="label is-size-4 has-text-weight-light"
              ></label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  placeholder="Name"
                  autoFocus
                />
                <span className="icon is-left">
                  <i className="fa fa-user"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label
                htmlFor="email"
                className="label is-size-4 has-text-weight-light"
              ></label>
              <div className="control has-icons-left">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  placeholder="Email"
                />
                <span className="icon is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label
                htmlFor="message"
                className="label is-size-4 has-text-weight-light"
              ></label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="textarea is-medium"
                placeholder="Please leave a brief message and your location"
              ></textarea>
            </div>
            <button
              id="button"
              type="submit"
              className="button is-info is-size-5"
            >
              Submit
            </button>
          </form>
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
              <span id="mediator-contact-info">
                {' '}
                <a>info@bridgefamilymediation.co.uk</a>
              </span>
            </a>
          </p>
          <p className="mediator-text ">
            <strong>Phone: </strong>
            <span id="mediator-contact-info">
              {' '}
              Click <Link to={'/ourmediators'}>here </Link>
              for our mediators
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
