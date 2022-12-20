import { React, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'info@bridgefamilymediation.co.uk',
    message: '',
    reply_to: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_z6diadp', 'template_mwatvbp', toSend, 'EDa-3yOSvDtlcxcpr')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        e.target.elements[0].value = '';
        e.target.elements[1].value = '';
        e.target.elements[2].value = '';
        swal(
          `Hi ${toSend.from_name}.`,
          'Thank you for your email, we will get back to you as soon as possible'
        );
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="content mt-2   ">
        <div className="title is-4 mr-6 ml-6 ">Contact us</div>

        <div className=" pt-5 pl-6 pr-6">
          <form onSubmit={onSubmit}>
            <div className="field">
              <label
                htmlFor="name"
                className="label is-size-4 has-text-weight-light"
              ></label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  className="input"
                  name="from_name"
                  placeholder="Name"
                  value={toSend.from_name}
                  onChange={handleChange}
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
                  type="text"
                  className="input"
                  name="reply_to"
                  placeholder="Email"
                  value={toSend.reply_to}
                  onChange={handleChange}
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
                type="text"
                name="message"
                id="message"
                rows="5"
                className="textarea is-medium"
                placeholder="Please leave a brief message and your location"
                value={toSend.message}
                onChange={handleChange}
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
