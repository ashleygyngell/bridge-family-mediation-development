import React from 'react';
import { Link } from 'react-router-dom';

const FaqGrid = () => {
  return (
    <>
      <body>
        {/* <div className="columns">
          <div id="faq-tile" className="tile is-parent">
            <button className="tile is-child box is-size-2">
              <p>Process</p>
            </button>
          </div>
          <div id="faq-tile" className="tile is-parent">
            <button className="tile is-child box is-size-2">
              <p>Is it legally Binding?</p>
            </button>
          </div>
        </div>
        <div className="columns">
          <div id="faq-tile" className="tile is-parent">
            <button className="tile is-child box is-size-2">
              <p>Who do we help?</p>
            </button>
          </div>
          <div id="faq-tile" className="tile is-parent">
            <button className="tile is-child box is-size-2">
              <p>What may be discussed?</p>
            </button>
          </div>
        </div> */}

        <div className="columns has-text-centered pt-6  ">
          <div id="faq-card" className="column  ">
            <Link to={'/faqs'}>
              <button className="button is-warning">
                <div>
                  <i className="fa-solid fa-scale-balanced"></i>{' '}
                </div>

                <div>What is Mediation?</div>
              </button>
            </Link>
          </div>
          <div id="faq-card" className="column  ">
            <Link to={'/howitworks'}>
              <button className="button is-warning">
                <div>
                  <i className="fa-regular fa-circle-question"></i>{' '}
                </div>

                <div>How does it work?</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="columns has-text-centered">
          <div id="faq-card" className="column ">
            <Link to={'/faqs'}>
              <button className="button is-warning">
                <div>
                  <i className="fa-solid fa-scale-balanced"></i>{' '}
                </div>

                <div>What is Mediation?</div>
              </button>
            </Link>
          </div>
          <div id="faq-card" className="column ">
            <Link to={'/howitworks'}>
              <button className="button is-warning">
                <div>
                  <i className="fa-regular fa-circle-question"></i>{' '}
                </div>

                <div>How does it work?</div>
              </button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
};

export default FaqGrid;
