import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Testimonials = () => {
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
        <div className="title is-4 mt-4 mr-6 ml-6">Testimonials</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-5 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              delectus possimus quibusdam cupiditate dicta obcaecati placeat
              maxime molestiae, eligendi amet laudantium temporibus quaerat!
              Perferendis iste optio quasi, eaque ab maxime!{' '}
              <small>
                <i>Lorem Ipsum</i>
              </small>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam, quaerat?{' '}
              <small>
                <i>Lorem Ipsum</i>
              </small>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet.{' '}
              <small>
                <i>Lorem Ipsum</i>
              </small>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus totam voluptatibus doloribus iste fugit iusto.{' '}
              <small>
                <i>Lorem Ipsum</i>
              </small>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              ullam architecto recusandae magnam at? Quam, expedita qui sunt
              distinctio culpa sed dolore odit veniam facilis unde magnam optio
              dolorum minima?{' '}
              <small>
                <i>Lorem Ipsum</i>
              </small>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              aperiam esse ab!{' '}
              <small>
                <i>Lorem Ipsum</i>
              </small>
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
