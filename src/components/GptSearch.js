import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className=" pt-[10%] ">
      <div className="absolute -z-20">
        <img src={BG_URL} alt="bg-netflix" className="" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
