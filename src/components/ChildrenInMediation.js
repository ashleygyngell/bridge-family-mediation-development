import React from 'react';
import { Link } from 'react-router-dom';
import childiwthfather from '../assets/images/childwithfather.png';
import { useEffect } from 'react';

const ChildrenInMediation = () => {
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

      <body className=" columns is-mobile is-tablet pl-6 pr-6 pb-6 pt-1 ">
        <div className="title mt-6 mr-6 ml-6">Children In Mediation</div>
        <div className="columns pt-5 pr-6 pl-4 ">
          <div className="column pt-0 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              laborum quam dolores nostrum, explicabo consectetur omnis libero
              accusantium nam, a amet rerum, consequuntur ipsam atque
              voluptatibus doloremque ex blanditiis iusto excepturi repellat ad!
              Velit optio repudiandae reprehenderit expedita, asperiores,
              quibusdam exercitationem itaque reiciendis impedit sint doloremque
              soluta corporis, eius numquam esse culpa omnis veritatis quas
              explicabo?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              enim quod deserunt rerum nesciunt exercitationem, sit animi
              laudantium modi! Culpa dolorum minus explicabo mollitia iste et,
              consequuntur ratione a, quisquam cupiditate esse aut sequi? Aut
              magni quas optio velit esse!
            </p>
          </div>
        </div>
        <div className=" column is-12-desktop is-12-tablet is-12-mobile  pt-0 pl-6 pr-6 pb-6 has-text-centered ">
          <img
            id="mediation-breakdown-image"
            src={childiwthfather}
            alt="Child With Father"
            width="auto"
          />{' '}
          <p>
            https://www.dreamstime.com/back-view-father-son-holding-hands-walking-bridge-park-image127765196
          </p>
        </div>
      </body>
    </>
  );
};

export default ChildrenInMediation;
