import React from "react";
import useTrailerVideos from "../utils/customHooks/useVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailerVideos(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
