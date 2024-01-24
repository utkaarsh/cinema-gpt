import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const Json = await data.json();
    setNowPlaying(Json.results);
    dispatch(addTopRatedMovies(Json.results));
  };
  return nowPlaying;
};

export default useTopRatedMovies;
