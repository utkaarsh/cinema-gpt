import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import GetMovieSuggestions from "./getMovieSuggestions";

const GptSearch = () => {
  const { moviesName, moviesResult } = useSelector((store) => store.gpt);
  const backgroundImageUrl =
    "https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg";

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className=" pt-[55%] sm:[20%] lg:pt-[10%]  ">
        <GptSearchBar />
        {moviesName && <GetMovieSuggestions />}
      </div>
    </div>
  );
};

export default GptSearch;
