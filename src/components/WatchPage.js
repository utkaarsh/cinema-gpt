import React from "react";
import usePlayVideo from "../utils/customHooks/usePlayVideo";
import { useParams } from "react-router-dom";

const WatchPage = () => {
  const { videoId } = useParams();

  const video = usePlayVideo(videoId);

  return (
    <div className="flex bg-black tetx-white justify-center items-center">
      <div className="h-screen w-screen">
        <iframe
          className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
          src={`https://www.youtube.com/embed/${video?.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
