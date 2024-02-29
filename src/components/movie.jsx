import React, { useEffect, useState } from "react";

//9f723f6e04638259e0e27581ee74d3bd
function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=9f723f6e04638259e0e27581ee74d3bd" //&page=2  parametre şeklinde sayfa sayfa vericez
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {movieList.map((movie) => (
        <img
          style={{
            width: "300px",
            height: "400px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

export default Movie;
