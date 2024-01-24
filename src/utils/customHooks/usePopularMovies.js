import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    !popularMovies && getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const Json = await data.json();
    setNowPlaying(Json.results);
    dispatch(addPopularMovies(Json.results));
  };
  return nowPlaying;
};

export default usePopularMovies;
