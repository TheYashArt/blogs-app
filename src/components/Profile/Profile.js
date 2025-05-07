import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { UserId } = useParams();
  const [User, setUser] = useState({});
  const [UserFirstName, setUserFirstName] = useState("");
  const [UserLastName, setUserLastName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [isediting, setisediting] = useState(false);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:4200/User/${UserId}`).then((Response) => {
      setUser(Response.data);
      setUserFirstName(Response.data.FirstName);
      setUserLastName(Response.data.LastName);
      setUserEmail(Response.data.Email);
    });
  }, [isediting]);

  function handleEdit() {
    axios
      .put(`http://localhost:4200/User/${UserId}`, {
        ...User,
        FirstName: UserFirstName,
        LastName: UserLastName,
        Email: UserEmail,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("user", JSON.stringify(response.data));
        setSaved(true);
        setisediting(false);
        navigate("/Home");
      });
  }

  return (
    <div className="mt-24 grid place-content-center">
      <div className="flex justify-between gap-3">
        <div className="text-xl">First Name</div>
        <div>
          <input
            className=" outline outline-1 px-3 py-1 text-lg"
            type="text"
            value={UserFirstName}
            onChange={(e) => {
              setisediting(true);
              setUserFirstName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-between gap-3 mt-8">
        <div className="text-xl">Last Name</div>
        <div>
          <input
            className=" outline outline-1 px-3 py-1 text-lg"
            type="text"
            value={UserLastName}
            onChange={(e) => {
              setisediting(true);
              setUserLastName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-between gap-3 mt-8">
        <div className="text-xl">Email</div>
        <div>
          <input
            className=" outline outline-1 px-3 py-1 text-lg"
            type="text"
            value={UserEmail}
            onChange={(e) => {
              setisediting(true);
              setUserEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        {isediting && (
          <div className="flex justify-end mt-5 ">
            <div
              onClick={handleEdit}
              className="px-4 font-semibold py-1 bg-green-400 rounded-lg w-fit text-lg"
            >
              Save
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Profile;
