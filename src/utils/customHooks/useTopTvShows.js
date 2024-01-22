import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch } from "react-redux";
import { addTopTvShows, addUpcomingMovies } from "../redux/movieSlice";

const useTopTvShows = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      options
    );
    const Json = await data.json();
    // console.log("json", Json);
    setNowPlaying(Json.results);
    dispatch(addTopTvShows(Json.results));
  };
  return nowPlaying;
};

export default useTopTvShows;
