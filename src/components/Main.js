import React, { useEffect, useState } from "react";
import { requests } from "../requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.popular).then((res) => setMovies(res.data.results));
  }, []);

  function sliceOverView(str) {
    if (str?.length > 150) {
      return str.slice(0, 150) + "...";
    }
    return str;
  }

  return (
    <div className=" w-full  h-[550px]  text-white mb-5 ">
      <div className="w-full h-full">
        <div className=" absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt="abc"
        ></img>

        <div className="absolute top-[200px]  px-4">
          <h1 className="font-medium text-xl pb-3">{movie?.title}</h1>
          <button className="bg-gray-200 text-black px-3 py-1">Play</button>
          <button className="border text-white border-gray-300 px-3 py-1 ml-2">
            Watch Later
          </button>
          <p className="text-xs  text-gray-500 pt-5 ">
            Released:{movie?.release_date}
          </p>
          <p className="w-full md:w-[600px] pt-1">
            {sliceOverView(movie?.overview)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
