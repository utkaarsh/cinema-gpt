import React, { useEffect, useState } from "react";
import { options } from "../constants";

const usePlayVideo = (id) => {
  const [video, setVideo] = useState(null);

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const Json = await data.json();
    const videos = Json.results;
    const clips = videos?.filter((video) => video.type === "Clip");
    const sortedVideos = clips?.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );
    const mainVideo = sortedVideos ? sortedVideos[0] : videos ? videos[0] : "";
    setVideo(mainVideo);
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return video;
};

export default usePlayVideo;
