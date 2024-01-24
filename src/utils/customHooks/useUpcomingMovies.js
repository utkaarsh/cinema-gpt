import { useEffect, useState } from "react";
import { options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  useEffect(() => {
    !upComingMovies && getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );
    const Json = await data.json();
    setNowPlaying(Json.results);
    dispatch(addUpcomingMovies(Json.results));
  };
  return nowPlaying;
};

export default useUpcomingMovies;
