import React from 'react';
// Doesnt need postcode as the text simply needs to be email, telephone number, and content
const Contact = () => {
  return (
    <>
      <body className="pt-6 pr-6 pl-6">
        <div className="content ">
          <p className="title is-1 is-1">Contact Us</p>
          <form
            action="mailto:admin@bridgefamilymediation.co.uk"
            method="post"
            name="EmailForm"
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
              className="button is-warning is-size-5"
            >
              Submit
            </button>
          </form>
        </div>
      </body>
    </>
  );
};

export default Contact;
