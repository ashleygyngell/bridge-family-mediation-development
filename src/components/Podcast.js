import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Podcast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <button className="back-button pl-4 pt-1   ">
        <Link to={'/'}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> Home
          </span>
        </Link>
      </button> */}

      <div className="content ">
        <div className="title is-4 mt-4 mr-6 ml-6">Podcast</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className=" column mt-4 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile">
            <img
              src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
              alt="FMC Child Mediation Logo"
            />
          </div>
          <div className="column pt-5 pl-6 pr-6 pb-6 is-6-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit:{' '}
              <a>Link</a>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit:{' '}
              <a>Link</a>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit:{' '}
              <a>Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcast;
