import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const Json = await data.json();
    // console.log("json", Json);
    setNowPlaying(Json.results);
    dispatch(addPopularMovies(Json.results));
  };
  return nowPlaying;
};

export default usePopularMovies;
