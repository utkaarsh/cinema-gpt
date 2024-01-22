import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <form className="flex items-center justify-center bg-black w-1/2 mx-auto my-4">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-3 w-80 text-black rounded-lg"
        />
        <button className="p-4 m-2 bg-red-700 w-40 rounded-lg font-bold transform active:scale-75 transition-transform">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
