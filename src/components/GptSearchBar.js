import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { openai } from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovies, clearList } from "../utils/redux/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const { moviesName } = useSelector((store) => store.gpt);

  const searchText = useRef();
  const dispatch = useDispatch();

  const fetchSearchData = async (query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const res = await data.json();
    return res.results;
  };

  const handleClearSearch = () => {
    dispatch(clearList());
  };
  const handleGptSearch = async () => {
    //Make a API call to GPT API and get searched movies results
    const gptQuery =
      "Act as a searchbox if any movie name is recognized or also any related words too just display the name of the movies or as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,12th fail,Sholay,Dhamaal,Dhol or example if someone puts godfather then show them the movie named The Godfather if not found dont return anything as simple as that";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) return console.log("Data not fetched");
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => fetchSearchData(movie));
    const getResults = await Promise.all(promiseArray);
    dispatch(addGptMovies({ moviesName: gptMovies, moviesResult: getResults }));
  };

  return (
    <div className=" z-20 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-center w-1/2 mx-auto my-4 bg"
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-3 w-80 text-black rounded-lg shadow-lg"
        />
        {!moviesName ? (
          <button
            onClick={handleGptSearch}
            className="shadow-lg p-4 m-2 bg-red-700 w-40 rounded-lg font-bold transform active:scale-75 transition-transform"
          >
            {lang[langKey].search}
          </button>
        ) : (
          <button
            onClick={handleClearSearch}
            className="shadow-lg py-4 px-2 m-2 bg-white text-red-700 w-40 rounded-lg font-bold transform active:scale-75 transition-transform"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
