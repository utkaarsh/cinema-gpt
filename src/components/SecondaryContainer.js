import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black text-white">
        <div className="lg:-mt-52 relative px-6 z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          {/* <MovieList title={"Top TV Shows"} movies={movies?.topTvShows} /> */}
          <MovieList title={"Most Popular"} movies={movies?.popularMovies} />
          <MovieList
            title={"Top rated movies"}
            movies={movies?.topRatedMovies}
          />
          <MovieList
            title={"Upcoming movies"}
            movies={movies?.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
