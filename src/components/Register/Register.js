import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [LikedBlogs, setLikedBlogs] = useState([])
  function handleRegister() {
    if(Email===null||Email===""||Password===null||Password===""){
      setErrorMsg("Enter the constraints")
      return
    }

    if (Password === ConfirmPassword) {
      axios.get("http://localhost:4200/User").then((Response) => {
        const userExists = Response.data.some((user) => user.Email === Email);
        if (userExists) {
          setErrorMsg("User already exists with this email");
          return;
        } else {
          axios
            .post("http://localhost:4200/User", { Email, Password, LikedBlogs })
            .then((Response) => {
              console.log(Response.data);
              if (Response.data) {
                // alert("Registration Successful");
                navigate("/Login");
              } else {
                alert("Registration Failed");
              }
            })
            .catch((error) => {
              console.error("There was an error!", error);
              alert("Registration error");
            });
        }
      });
    } else {
      setErrorMsg("Passwords do not match");
      return;
    }
  }
  return (
    <div className="flex justify-start my-14">
      <div className="bg-slate-200 px-5 py-8 rounded shadow-lg w-[320px] sm:w-[400px] h-[450px] mt-20 mx-auto flex flex-col justify-center items-center">
        <div className="text-3xl font-semibold text-slate-800">Register</div>
        <div className="mt-4">
          <div className="flex justify-start text-lg">Enter your Email</div>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="YourEmail@gmail.com"
              className="px-3 py-1 flex justify-start w-[270px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-start text-lg">Enter your Password</div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password123"
              className="px-3 py-1 flex justify-start bg-white w-[270px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-start text-lg">
            Confirm your Password
          </div>
          <div>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="password123"
              className="px-3 py-1 flex justify-start bg-white w-[270px]"
            />
          </div>
          <div>
            {ErrorMsg && (
              <div className="text-red-500 text-sm mt-2 text-center">{ErrorMsg}</div>
            )}
          </div>
        </div>
        <div className="mt-4">
          Already Have an account
          <span
            className="text-blue-700 ml-[5px]"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login here!!
          </span>
        </div>
        <div>
          <button
            onClick={handleRegister}
            className="mt-8 px-3 bg-slate-800 w-[250px] sm:w-[300px] py-2 text-white rounded hover:bg-slate-700"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
