import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
  return (
    <div className="flex justify-start my-14">
      <div className="bg-slate-200 px-5 py-8 rounded shadow-lg w-[320px] sm:w-[400px] h-[450px] mt-20 mx-auto flex flex-col justify-center items-center">
        <div className="text-3xl font-semibold text-slate-800">Register</div>
        <div className="mt-4">
          <div className="flex justify-start text-lg">Enter your Email</div>
          <div>
            <input
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
              type="password"
              placeholder="password123"
              className="px-3 py-1 flex justify-start bg-white w-[270px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-start text-lg">Confirm your Password</div>
          <div>
            <input
              type="password"
              placeholder="password123"
              className="px-3 py-1 flex justify-start bg-white w-[270px]"
            />
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
          <button className="mt-8 px-3 bg-slate-800 w-[250px] sm:w-[300px] py-2 text-white rounded hover:bg-slate-700">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
