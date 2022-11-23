import { React, useEffect } from 'react';
import Spotify from 'react-spotify-embed';

const Podcast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content ">
        <div className="title is-4 mt-2 mr-6 ml-6">Podcast</div>
        <div className="columns pt-5 pr-4 pl-4 ">
          <div className="column pt-0 ml-1 pl-6 pr-6 pb-0 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            Latest Episode: <br />
            <Spotify
              wide
              link="https://open.spotify.com/show/6B1oXS9x1A56sUPyGvYZNK?si=o2LUbFF9SGKZQ20QgthTNg&nd=1"
            />
          </div>
        </div>
        <div className="columns pt-2 pr-4 pl-4 ">
          <div className="column ml-1 pt-0 pl-6 pr-6 pb-6 is-12-desktop is-12-tablet is-12-mobile mediator-text">
            Previous Episodes: <br />
            <Spotify
              wide
              link="https://open.spotify.com/episode/60KMFuixM5tWGcfgvX5Jm0"
            />
            <Spotify
              wide
              link="https://open.spotify.com/episode/7JdNhvZACOg5vdeMdRVg7x"
            />
            <Spotify
              wide
              link="https://open.spotify.com/episode/2KCLx9C4e9ZcZonla5zVbf"
            />
          </div>{' '}
        </div>
      </div>
    </>
  );
};

export default Podcast;
