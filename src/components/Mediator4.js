import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mediator4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <body>
        <button className="back-button pl-4 pt-2 " onClick={() => navigate(-1)}>
          <span>
            <i className="fa-solid fa-arrow-left "></i> Back
          </span>
        </button>
        <div className="columns pt-6">
          <div className="column is-4 pl-6 pt-6">
            <img
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              alt="Placeholder image"
              className="mediator-image"
            />
          </div>
          <div className="column is-8 pr-6 ">
            <div className=" has-text-centered ">
              <div className="media">
                <div className="media-content ">
                  <p className="title is-1 ">Caroline Dunne</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-5">Balham | Barnes | Battersea</p>
            </div>
            <div className="mediator-text p-5 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur vel quidem perferendis, aspernatur autem deserunt
                excepturi. Tempore blanditiis eveniet nemo vitae, praesentium
                velit numquam dolores, ipsa illo veniam dolore adipisci cumque,
                ratione soluta quaerat voluptas quam.
              </p>{' '}
              <br></br>
              <p>
                Hic quae quas reiciendis tempore quidem et quisquam debitis, ut
                qui odio consequatur maiores harum iusto earum eveniet
                accusantium mollitia nihil dolor? Quas recusandae porro, dicta
                soluta dignissimos voluptas rerum ea minus, maiores eaque in
                provident? Distinctio, eum! Eum similique itaque doloribus
                voluptatem deserunt!
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mediator4;
