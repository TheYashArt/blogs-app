import React from "react";
import BlogCards from "../BlogsOuterCards/BlogOuterCards";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="my-40">
      {/* <Header /> */}
      <div className="text-6xl font-extrabold text-slate-800 my-10 flex justify-start px-3 sm:text-center sm:flex sm:justify-center">
        Blogs App
      </div>
      <div className="text-3xl font- text-center text-slate-700 flex justify-start px-3 sm:text-center sm:flex sm:justify-center">
        Upload your Blogs...
      </div>

      <div className="flex flex-col gap-9 sm:flex sm:flex-row sm:justify-around sm:w-full my-14 sm:my-18">
        <div>
          <button onClick={()=>{navigate("/register")}} className="bg-slate-700 px-8 py-3 w-[300px] text-white">Create Account</button>
        </div>
        <div>
          <button onClick={()=>{navigate("/Login")}} className="bg-slate-700 px-8 py-3 w-[300px] text-white">Login to Account</button>
        </div>
        <div>
          <button onClick={()=>{navigate("/Home")}} className="bg-slate-700 px-8 py-3 w-[300px] text-white">HomePageShortcur</button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
