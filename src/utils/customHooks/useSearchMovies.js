import React, { useEffect, useState } from "react";
import { options } from "../constants";

const useSearchMovies = (query) => {
  const [searchedMovie, setSearcedMovies] = useState();
  const fetchSearchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const res = await data.json();
    setSearcedMovies(res);
  };
  useEffect(() => {
    fetchSearchData();
  }, []);
  return searchedMovie;
};

export default useSearchMovies;
