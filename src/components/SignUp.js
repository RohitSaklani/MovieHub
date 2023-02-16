import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const UseAuth = UseAuthContext();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await UseAuth.signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen   ">
      <img
        className="  w-full h-full object-cover  "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix"
      />
      <div className="w-full h-full absolute top-0 bg-black/40   "></div>
      <div className="w-full h-full fixed top-0 left-0 px-4 py-24 ">
        <div className=" max-w-[400px] h-[500px] mx-auto   bg-black/80 px-8 pt-12  ">
          <div>
            <p className="text-xl mb-5">Sign Up</p>
            <form onSubmit={onSubmitHandler} className="flex flex-col  gap-5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 h-[40px] px-2 rounded text-sm"
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700 h-[40px] px-3 rounded text-sm"
                type="password"
                placeholder="password"
              />
              <button className="bg-red-500 h-[40px] rounded text-sm mt-2">
                Sign Up
              </button>
            </form>
          </div>
          <div className="text-xs text-gray-500 mt-5">
            <input className="border-0 bg-white " type="checkbox"></input>
            <span className="ml-1">Remember Me</span>
            <span className="float-right">Need Help?</span>
            <p className="mt-8 text-[13px]">
              Already subscribed to Netflix ?
              <span className="text-white">
                <Link to="/login"> Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
