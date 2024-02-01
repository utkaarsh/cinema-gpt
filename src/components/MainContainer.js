import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isOpen = useSelector((store) => store.config.toggleHeader);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovies = movies[0];
  const { id, original_title, overview } = mainMovies;

  return (
    <div
      className={`${
        isOpen ? "pt-[10rem]" : "pt-[7rem]"
      } lg:pt-0 text-black font-bold`}
    >
      <VideoTitle title={original_title} overview={overview} videoId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
