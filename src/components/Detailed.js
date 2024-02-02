import React, { useEffect, useState } from "react";
import { IMG_CDN, options } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import playIcon from "../assets/play.svg";
import useSimilar from "../utils/customHooks/useSimilar";
import MovieList from "./MovieList";

const Detailed = () => {
  const { movieId } = useParams();
  const isOpen = useSelector((store) => store.config.toggleHeader);
  const similar = useSimilar(movieId);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const Json = await data.json();
    setDetails(Json);
  };
  if (!details) return <h2>Loading</h2>;

  const { genres, title, overview, backdrop_path, poster_path, vote_average } =
    details;
  const BG_POSTER = "https://image.tmdb.org/t/p/w780" + backdrop_path;
  const genre_names = genres?.map((genre) => genre.name);
  const genre = genre_names.join(", ");
  if (!BG_POSTER) <h2>Loading</h2>;

  return (
    <div className="flex-1 ">
      <div className=" flex-1 bg-black bg-opacity-90 py-14">
        <div className="absolute hidden sm:flex opacity-95  ">
          <img
            src={BG_POSTER}
            alt="POSTER"
            className="-z-20 opacity-20 w-full sm:w-screen sm:h-[580px] "
          />
        </div>
        <div
          className={`absolute  bg-black bg-opacity-90 sm:bg-transparent  ${
            isOpen ? "pt-[10rem]" : "pt-[2rem]"
          } mt-28 sm:mt-[7rem]  sm:mx-8 sm:my-2 flex flex-col sm:flex-row sm:justify-center `}
        >
          <div className=" flex justify-center ">
            <img
              src={IMG_CDN + poster_path}
              className="h-64  sm:h-96 shadow-xl "
              alt=""
            />
          </div>
          <div className=" p-4 ml-4 sm:w-1/2 ">
            <h1 className="text-xl sm:text-5xl my-2 font-bold text-white">
              {title}
            </h1>
            <h2 className="font-bold text-gray-300">
              {genre} | ⭐{vote_average}
            </h2>
            <h2 className="text-lg sm:text-2xl font-semibold my-2 text-gray-300">
              Overview{" "}
            </h2>
            <h2 className="text-gray-300 text-xs">{overview}</h2>
            <Link to={"/watch/" + movieId}>
              <button className="hover:bg-opacity-50 mx-2 my-4 px-3 lg:py-3 lg:px-12  text-lg sm:text-lg text-black bg-white flex items-center">
                <img src={playIcon} className="h-10 lg:h-12" alt="playIcon" />{" "}
                <p className=" ml-2 font-bold">Play</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex pt-[50rem] sm:pt-[36rem]  overflow-x-scroll no-scrollbar">
          {similar && <MovieList title={"Similar"} movies={similar} />}
        </div>
      </div>
    </div>
  );
};

export default Detailed;
