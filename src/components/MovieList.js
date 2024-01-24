import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const movie = movies;
  return (
    <div className="px-1 sm:px-4  text-white">
      <h1 className="text-2xl py-4 font-bold">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className=" flex ">
          {movie?.map((movie, i) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
