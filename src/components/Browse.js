import React from "react";
import Header from "./Header";
import useNowPlaying from "../utils/customHooks/useNowPlaying";

const Browse = () => {
  const nowPlaying = useNowPlaying();
  console.log("List", nowPlaying);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
