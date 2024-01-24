import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import GetMovieSuggestions from "./getMovieSuggestions";

const GptSearch = () => {
  const { moviesName, moviesResult } = useSelector((store) => store.gpt);

  return (
    <div
      className=""
      //  className="sm:bg-blur sm:backdrop-blur-2xl sm:h-screen sm:bg-cover sm:bg-no-repeat sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg')] "
    >
      <div className="fixed -z-10 ">
        <img src={BG_URL} alt="bg-netflix" className=" " />
      </div>
      <div className=" pt-[10%]  ">
        <GptSearchBar />
        {moviesName && <GetMovieSuggestions />}
      </div>
    </div>
  );
};

export default GptSearch;
