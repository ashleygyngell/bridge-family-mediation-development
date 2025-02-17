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
    send('service_rnr5nk8', 'template_mwatvbp', toSend, 'EDa-3yOSvDtlcxcpr')
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
