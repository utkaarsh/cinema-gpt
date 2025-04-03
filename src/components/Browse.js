import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/customHooks/usePopularMovies";
import useTopRatedMovies from "../utils/customHooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/customHooks/useUpcomingMovies";
import useTopTvShows from "../utils/customHooks/useTopTvShows";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopTvShows();
  const movies = useSelector((state) => state.movies);

  if (!movies.topRatedMovies) {
    console.log("Hell yeah");

    return (
      <div className=" bg-black h-screen w-full flex flex-col space-y-3 items-center justify-center">
        <h1 className="text-red-700 text-lg">
          Movie data not fetched, third party api error (tmdb)
        </h1>
        <h2 className="text-white">
          {
            "This might not work in some browsers by default so please enablle Google DNS in Chrome Setting > privacy & securtity > securtity > Select DNS Provider- Google DNS"
          }
        </h2>
      </div>
    );
  }

  return (
    <div className="">
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};

export default Browse;
