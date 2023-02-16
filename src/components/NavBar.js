import React from "react";
import { Link } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = UseAuthContext();
  const navigate = useNavigate();
  console.log(user?.email);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex w-full justify-between items-center px-4 py-3 z-[100] absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/accounts">
            <button className="text-sm  px-4 py-2 text-white cursor-pointer">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="text-sm bg-red-600 px-4 py-2 rounded text-white cursor-pointer"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-sm  px-4 py-2 text-white cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-sm bg-red-600 px-4 py-2 rounded text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
