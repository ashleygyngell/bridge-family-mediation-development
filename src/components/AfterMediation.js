import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AfterMediation = () => {
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
        <div className="title is-4 mt-2 mr-6 ml-6">After Mediation</div>
        <div className="columns pt-0 pr-6 pl-4 ">
          <div className="column mt-5 pl-6 pr-6 pb-3 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laborum quam dolores nostrum, explicabo consectetur omnis libero
              accusantium nam, a amet rerum, consequuntur ipsam atque
              voluptatibus doloremque ex blanditiis iusto excepturi repellat ad!
            </p>
            {/* <br /> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              enim quod deserunt rerum nesciunt exercitationem, sit animi
              laudantium modi! Culpa dolorum minus explicabo mollitia iste et,
              consequuntur ratione a, quisquam cupiditate esse aut sequi? Aut
              magni quas optio velit esse! Velit optio repudiandae reprehenderit
              expedita, asperiores, quibusdam exercitationem itaque reiciendis
              impedit sint doloremque soluta corporis, eius numquam esse culpa
              omnis veritatis quas explicabo?
            </p>
            {/* <br /> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur itaque delectus suscipit iste nihil illum nemo quas
              voluptas laborum saepe! Velit optio repudiandae reprehenderit
              expedita, asperiores, quibusdam exercitationem itaque reiciendis
              impedit sint doloremque soluta corporis, eius numquam esse culpa
              omnis veritatis quas explicabo?
            </p>
          </div>
        </div>
        <div className=" column mt-4 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile has-text-centered">
          <img
            id="mediation-breakdown-image"
            src="https://res.cloudinary.com/dj7e2jadx/image/upload/v1663000714/istockphoto-960613824-1024x1024-transformed_ayyh9v.jpg"
            alt="FMC Child Mediation Logo"
          />
        </div>
      </div>
      <div className="faq-buttons-div columns is-mobile">
        <button className="faq-button column is-6-mobile ">
          <Link to={'/divorceandmediation'}>
            <span>
              <i className="fa-solid fa-arrow-left  "></i> Previous
            </span>

            <p className="faq-button-subtitle">Divorce & Mediation </p>
          </Link>
        </button>

        <button className="faq-button column is-6-mobile ">
          {/* <Link to={'/divorceandmediation'}>
            <span>
              Next <i className="fa-solid fa-arrow-right "></i>{' '}
            </span>

            <p className="faq-button-subtitle">Divorce &amp; Mediation </p>
          </Link> */}
        </button>
      </div>
    </>
  );
};

export default AfterMediation;
