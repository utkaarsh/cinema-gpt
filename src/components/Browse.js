import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/customHooks/usePopularMovies";
import useTopRatedMovies from "../utils/customHooks/useTopRatedMovies";
import useUpcomingMovies from "../utils/customHooks/useUpcomingMovies";
import useTopTvShows from "../utils/customHooks/useTopTvShows";

const Browse = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTopTvShows();

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
