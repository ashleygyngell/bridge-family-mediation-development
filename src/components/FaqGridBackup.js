import React from 'react';
import { Link } from 'react-router-dom';

const FaqGrid = () => {
  return (
    <>
      <body className=" ml-5 mr-5 pt-5 pr-6 pl-6">
        <div className="columns has-text-centered ">
          <div id="faq-card" className="column  ">
            <Link to={'/whatismediation'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-circle-question "></i> */}
                  <p className="title is-3">What is Mediation?</p>
                </div>
              </button>
            </Link>
          </div>
          <div id="faq-card" className="column  ">
            <Link to={'/howitworks'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-scale-balanced"></i> */}
                  <p>How does it work?</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="columns has-text-centered">
          <div id="faq-card" className="column  ">
            <Link to={'/howitworks'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-people-group"></i> */}
                  <p>Who do we help?</p>
                </div>
              </button>
            </Link>
          </div>
          <div id="faq-card" className="column  ">
            <Link to={'/howitworks'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-comment "></i> */}
                  <p>What may be discussed?</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="columns has-text-centered ">
          <div id="faq-card" className="column  ">
            <Link to={'/whatismediation'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-circle-question "></i> */}
                  <p>Why Mediate?</p>
                </div>
              </button>
            </Link>
          </div>
          <div id="faq-card" className="column  ">
            <Link to={'/howitworks'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-scale-balanced"></i> */}
                  <p>What does it cost ?</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="columns has-text-centered ">
          <div id="faq-card" className="column  ">
            <Link to={'/whatismediation'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-circle-question "></i> */}
                  <p>Why Choose us?</p>
                </div>
              </button>
            </Link>
          </div>
          <div id="faq-card" className="column  ">
            <Link to={'/howitworks'}>
              <button id="button" className="button is-warning">
                <div>
                  {/* <i className="fa-solid fa-scale-balanced"></i> */}
                  <p>How does it work?</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
};

export default FaqGrid;
