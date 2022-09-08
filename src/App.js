import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const fetchMoviesHandler = async () => {
    setIsLoading(true)
    const response = await fetch("https://swapi.dev/api/films");
    let data = await response.json();
    data = data.results.map((movie) => ({
      id: movie.episode_id,
      title: movie.title,
      openingText: movie.opening_crawl,
      releaseDate: movie.release_date,
    }));
    setMovies(data);
    setIsLoading(false)
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        { !isLoading && movies.length > 0 && <MoviesList movies={movies} /> }
        { !isLoading && movies.length === 0 && <p>Found no movies.</p> }
        { isLoading && <p>Loading...</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
