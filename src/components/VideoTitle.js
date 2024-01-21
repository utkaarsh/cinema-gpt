import React from "react";
import playIcon from "../assets/play.svg";
import infoIcon from "../assets/info.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="p-3 pt-[20%] px-16 absolute bg-gradient-to-r from-black w-full aspect-video text-white">
      <div className="m-2">
        <h1 className="font-bold text-2xl sm:text-6xl">{title}</h1>
        <h3 className=" hidden sm:flex w-9/12 sm:w-1/4">{overview}</h3>
      </div>
      <div className="flex">
        <button className="hover:bg-opacity-50 m-2 px-4 sm:py-4 sm:px-12 text-lg text-black bg-white flex items-center">
          <img src={playIcon} className="h-6 sm:h-12" alt="playIcon" />{" "}
          <p className=" ml-2">Play</p>
        </button>
        <button className="hover:bg-opacity-50 items-center m-2 flex py-2 px-4 sm:py-4 sm:px-12 text-lg text-white bg-gray-500">
          <img src={infoIcon} className="h-6 sm:h-12" alt="" />
          <p className="ml-2">More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
