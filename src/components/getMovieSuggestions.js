import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GetMovieSuggestions = () => {
  const user = useSelector((store) => store.user.displayName);
  const { moviesName, moviesResult } = useSelector((store) => store.gpt);

  return (
    <div className="mx-24 p-4  my-8 bg-opacity-80 bg-black text-black overflow-y-scroll no-scrollbar max-h-[40rem] w-[23rem] sm:w-[42rem] lg:w-[72rem] flex flex-col  justify-center">
      <h1 className="font-bold text-3xl m-2 text-white">
        Hey {user} there you have{" "}
      </h1>

      <div className="flex flex-col overflow-x-scroll no-scrollbar">
        {moviesName?.map((movie, index) => (
          <MovieList title={movie} key={movie} movies={moviesResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GetMovieSuggestions;
