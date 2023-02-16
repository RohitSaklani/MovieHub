import React, { useEffect, useState } from "react";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { UseAuthContext } from "../context/AuthContext";
import { db } from "./Firebase";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UseAuthContext();

  const [saved, setSaved] = useState(false);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please login first");
    }
  };

  return (
    <div className="w-[160px] md:w-[180px] lg:w-[200px] xl:w[220px]  2xl:w[230px] h-[80px] md:h-[90px] lg:h-[100px] xl:h[120px] 2xl:h[130px] inline-block relative  mx-1">
      <img
        className=" w-full h-full  object-cover"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
      ></img>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white">
        <p className=" w-full h-full text-sm xl:text-base  flex justify-center items-center text-center  whitespace-normal ">
          {item?.title}
        </p>
        <div onClick={saveShow} className="absolute top-2 left-2">
          {like ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
};

export default Movie;
