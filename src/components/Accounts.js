import React, { useEffect, useState } from "react";
import { arrayUnion, updateDoc, doc, onSnapshot } from "firebase/firestore";
import { UseAuthContext } from "../context/AuthContext";
import { db } from "./Firebase";
import { AiOutlineClose } from "react-icons/ai";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Accounts = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UseAuthContext();

  const movieRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, []);

  const deleteSaved = async (id) => {
    try {
      const result = movies?.filter((ele) => ele.id !== id);
      await updateDoc(movieRef, { savedShows: result });
    } catch (err) {
      console.log(err);
    }
  };

  const slideLeft = () => {
    var slider = document.querySelector(".movie-slider");
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.querySelector(".movie-slider");
    console.log(slider);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      {console.log()}
      <div className="w-full h-[400px]  ">
        <img
          className="  w-full h-full object-cover  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        />
        <div className="w-full h-full absolute top-0 bg-black/40   "></div>
        <p className="absolute top-60 text-[50px] text-bold pl-5">My Shows</p>
      </div>
      <div className="  flex  items-center  group ">
        <MdChevronLeft
          onClick={slideLeft}
          className=" text-black absolute bg-white rounded-full  z-10 opacity-1 hover:opacity-30  group-hover:block hidden left-0 cursor-pointer"
          size={30}
        />
        <div className="pt-3 movie-slider overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth mt-2 pl-1">
          {movies?.map((item) => (
            <div
              key={item?.id}
              className="w-[160px] md:w-[180px] lg:w-[200px] xl:w[220px]  2xl:w[230px]  inline-block  relative px-1 "
            >
              <img
                className=" w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${item?.img}`}
              ></img>
              <div className="absolute  top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                <AiOutlineClose
                  onClick={() => {
                    deleteSaved(item?.id);
                  }}
                  className=" absolute right-1"
                />
                <p className="w-full h-full  text-sm xl:text-base  flex  justify-center items-center  text-center whitespace-normal ">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="text-black absolute bg-white rounded-full z-10 opacity-1	 hover:opacity-30 hidden group-hover:block right-0	cursor-pointer"
          size={30}
        />
      </div>
    </div>
  );
};

export default Accounts;
