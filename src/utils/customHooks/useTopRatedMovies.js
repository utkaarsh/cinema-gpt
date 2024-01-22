import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const Json = await data.json();
    // console.log("json", Json);
    setNowPlaying(Json.results);
    dispatch(addTopRatedMovies(Json.results));
  };
  return nowPlaying;
};

export default useTopRatedMovies;
