import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";
import MainContainer from "./MainContainer";

const Browse = () => {
  const nowPlaying = useNowPlaying();
  // console.log("List", nowPlaying);
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
