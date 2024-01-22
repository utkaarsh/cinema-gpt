import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="flex w-48 sm:w-60 pr-6">
      <img className="" src={IMG_CDN + poster_path} alt="poster image" />
    </div>
  );
};

export default MovieCard;
