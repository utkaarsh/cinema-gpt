import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";

const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const Json = await data.json();
    console.log("json", Json);
    setNowPlaying(Json.results);
    dispatch(addNowPlayingMovies(Json.results));
  };
  return nowPlaying;
};

export default useNowPlaying;
