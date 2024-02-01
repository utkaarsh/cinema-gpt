import React, { useEffect, useState } from "react";
import { options } from "../constants";

const useSimilar = (movieId) => {
  const [similar, setSimilar] = useState(null);
  const fetchSimilar = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      options
    );
    const Json = await data.json();
    setSimilar(Json.results);
  };
  useEffect(() => {
    fetchSimilar();
  }, []);
  return similar;
};

export default useSimilar;
