import React, { use, useEffect } from "react";
import { useGlobalContext } from "./Context";

const Movie = () => {
  const { movie } = useGlobalContext();

  useEffect(() => {
    console.log("Movie state updated:", movie);
  }, [movie]);

  return (
    <div>
      {movie.map((currMovie) => {
        return (
          <>
            <div key={currMovie.imdbID}>
              <h2>{currMovie.Title}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Movie;
