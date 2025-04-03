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
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2NiOTg1MjIyY2U5YTg5NWMzNzkxODVkYWE3OWViYyIsIm5iZiI6MTc0MzY5MDE2MC41OTMsInN1YiI6IjY3ZWU5OWIwMDM1NDBjZjhlNTYyYzBjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tn-fnrYLCkQrjTn126v6SaQXc5jb6Ln7oDYs-MRqO1k",
      },
    };
    console.log("ENV ", process.env.REACT_APP_TMDB_KEY);

    const data = await fetch(url, options);

    const Json = await data.json();
    setNowPlaying(Json.results);
    dispatch(addPopularMovies(Json.results));
  };
  return nowPlaying;
};

export default usePopularMovies;
