import React from "react";
import { IMG_CDN } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, id }) => {
  const navigate = useNavigate();
  if (!poster_path) return null;
  return (
    <div className="flex w-48 sm:w-60 pr-6 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
      <Link to={`/details/${id}`}>
        {" "}
        <img className="" src={IMG_CDN + poster_path} alt="poster image" />
      </Link>
    </div>
  );
};

export default MovieCard;
