import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GetMovieSuggestions = () => {
  const user = useSelector((store) => store.user.displayName);
  const { moviesName, moviesResult } = useSelector((store) => store.gpt);

  return (
    <div className="p-4  bg-opacity-90 bg-black text-black  ">
      <h1 className="font-bold text-3xl m-2 text-white">
        Hey {user} there you have{" "}
      </h1>

      <div>
        {moviesName?.map((movie, index) => (
          <MovieList title={movie} key={movie} movies={moviesResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GetMovieSuggestions;
