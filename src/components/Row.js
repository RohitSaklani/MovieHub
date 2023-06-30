import React, { useEffect, useState } from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";

import Movie from "./Movie";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => setMovies(res.data.results));
  }, []);

  const slideLeft = (title) => {
    console.log(typeof title + "   " + title);
    var slider = document.querySelector(".movie-slider" + title);
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = (title) => {
    console.log(typeof title + "   " + title);
    var slider = document.querySelector(".movie-slider" + title);
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h1 className="my-1 ml-2">{title}</h1>

      <div className=" flex  items-center  group  ">
        <MdChevronLeft
          onClick={() => slideLeft(title)}
          className=" text-black absolute bg-white rounded-full z-10 opacity-1 hover:opacity-30 hidden group-hover:block left-0 cursor-pointer"
          size={30}
        />
        <div
          className={`w-full h-full ${
            "movie-slider" + title
          } overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth`}
        >
          {movies.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </div>

        <MdChevronRight
          onClick={() => slideRight(title)}
          className="text-black absolute bg-white rounded-full z-10 opacity-1 hover:opacity-30 hidden group-hover:block right-0 cursor-pointer"
          size={30}
        />
      </div>
    </div>
  );
};

export default Row;
