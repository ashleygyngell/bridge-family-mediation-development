import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mediator4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <body>
        <div className="columns">
          <div className="column">
            <button onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <div className="card" id="mediator-image">
              <div className="card-content ">
                <figure className="image-left">
                  <img
                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                    alt="Placeholder image"
                    className="mediator-image"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card-content has-text-centered">
              <div className="media ">
                <div className="media-content">
                  <p className="title is-1 ">Caroline Dunne</p>
                </div>
              </div>

              <p className="subtitle is-5 pt-6">Balham | Barnes | Battersea</p>
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
