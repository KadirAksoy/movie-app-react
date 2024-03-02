import React, { useEffect, useState } from "react";
import Slider from "react-slick";

//9f723f6e04638259e0e27581ee74d3bd
function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [popularMovieList, setPopularMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=9f723f6e04638259e0e27581ee74d3bd" //&page=2  parametre şeklinde sayfa sayfa vericez
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results));
  };

  const getPopularMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9f723f6e04638259e0e27581ee74d3bd"
    )
      .then((response) => response.json())
      .then((response) => setPopularMovieList(response.results));
  };

  useEffect(() => {
    getMovie();
    getPopularMovie();
  }, []);

  const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details">
          <div className="movie-title">{movie.title}</div>
          <div className="movie-rate">Rating: {movie.vote_average}</div>
        </div>
      </div>
    );
  };

  const MovieList = ({ list, title }) => {
    return (
      <>
        <div className="div-class" style={{ color: "#ffffff" }}>
          {title}
        </div>
        <div className="movie">
          {list.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="movie-container">
      <MovieList list={movieList} title="Movie List" />
      <MovieList list={popularMovieList} title="Top Rated List" />
    </div>
  );
}

export default Movie;
