import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menuState, setmenuState] = useState(false);

  // console.log('localStorage.getItem("user"): ', localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  function menuOpen() {
    setmenuState(!menuState);
  }

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/Dashboard");
  }

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center z-30 fixed top-0">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="text-2xl text-white font-bold py-2"
      >
        Blogs App
      </div>
      {!user ? (
        <>
          <div className="gap-6 sm:flex hidden">
            <div
              onClick={() => {
                navigate("/Login");
              }}
              className="text-xl"
            >
              Login
            </div>
            <div
              onClick={() => {
                navigate("/Register");
              }}
              className="text-xl"
            >
              Sign Up
            </div>
          </div>
          <button onClick={menuOpen} className="sm:hidden block text-xl">
            Menu
          </button>
          {menuState && (
            <div className="sm:hidden rounded-bl absolute top-20 right-0 bg-gray-800 text-white flex flex-col">
              <div
                onClick={() => {
                  navigate("/Login");
                }}
                className="text-xl p-4 hover:bg-slate-700"
              >
                Login
              </div>
              <div
                onClick={() => {
                  navigate("/Register");
                }}
                className="text-xl p-4 hover:bg-slate-700"
              >
                Sign Up
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex gap-6 text-center">
          <div
            className="text-xl"
            onClick={() => {
              navigate("/Profile/" + user.id);
            }}
          >
            {user.FirstName !== null &&
            user.FirstName !== "" &&
            user.LastName !== null &&
            user.LastName !== ""
              ? user.FirstName + " " + user.LastName
              : user.FirstName !== "" && user.FirstName !== null
              ? user.FirstName
              : user.LastName !== "" && user.LastName !== null
              ? user.LastName
              : user.Email}
          </div>
          <div className="text-center text-xl" onClick={handleLogout}>
            Log Out
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
