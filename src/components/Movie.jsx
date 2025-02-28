import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const { movie } = useGlobalContext();

  useEffect(() => {
    console.log("Movie state updated:", movie);
  }, [movie]);

  return (
    <div>
        <div className="container grid grid-4-col">
          {movie.map((currMovie) => {
            const { imdbID, Title, Poster } = currMovie;
            const moviename = Title.substring(0, 15);
            return (
              <NavLink key={imdbID} to={`movie/${imdbID}`}>
                <div className="card">
                  <div className = "card-info">

                  <h2>{Title.length > 15 ? `${moviename}...` : moviename}</h2>
                  <img src={Poster} alt={imdbID} srcSet="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
  );
};

export default Movie;
