import React, { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../redux/movieSlice";

const useTrailerVideos = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const Json = await data.json();
    const videos = Json.results;
    const trailers = videos?.filter((video) => video.type === "Trailer");
    const sortedVideos = trailers?.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );
    const mainVideo = sortedVideos ? sortedVideos[0] : videos ? videos[0] : "";
    dispatch(addTrailer(mainVideo));
  };
  useEffect(() => {
    !trailerVideo && fetchVideo();
  }, []);
};

export default useTrailerVideos;
