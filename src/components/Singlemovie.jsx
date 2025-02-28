import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Singlemovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log(API_KEY);
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f0f0" }}>
      <div style={{ padding: "20px", maxWidth: "600px", fontFamily: "Arial, sans-serif", backgroundColor: "#e5dddc", borderRadius: "10px" }}>
        <h1 style={{ textAlign: "center", color: "#333", fontSize: "2em" }}>{movie.Title}</h1>
        <p style={{ fontSize: "2em" }}>
          <strong>Year:</strong> {movie.Year}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>Actors:</strong> {movie.Actors}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>Language:</strong> {movie.Language}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>Country:</strong> {movie.Country}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>Awards:</strong> {movie.Awards}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>
        <p style={{ fontSize: "2em" }}>
          <strong>IMDB Votes:</strong> {movie.imdbVotes}
        </p>
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            display: "block", 
            margin: "20px auto", 
            padding: "10px 20px", 
            backgroundColor: "#007BFF", 
            color: "#fff", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer",
            fontSize: "1em"
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Singlemovie;
