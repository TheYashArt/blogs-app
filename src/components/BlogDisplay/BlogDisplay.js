import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogDisplay() {
  const id = useParams().id;
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [BlogData, setBlogData] = useState({});
  const [likes, setLikes] = useState(0);
  const [Dislikes, setDisLikes] = useState(0);
  // const [HasLiked, setHasLiked] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4200/Blogs/${id}`)
      .then((res) => {
        setBlogData(res.data);
        setLikes(res.data.likes);
        setDisLikes(res.data.dislikes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [likes, Dislikes]);

  function handleLike() {
    const HasLiked = BlogData.LikedBy.includes(user.id);
    if (BlogData.DislikedBy.includes(user.id)) {
      return;
    }

    setLikes(likes + 1);
    axios.put(`http://localhost:4200/Blogs/${id}`, {
      ...BlogData,
      likes: HasLiked ? BlogData.likes - 1 : BlogData.likes + 1,
      LikedBy: HasLiked
        ? BlogData.LikedBy.filter((id) => id !== user.id)
        : [...BlogData.LikedBy, user.id],
    });
  }

  function handleDislike() {
    const HasDisliked = BlogData.DislikedBy.includes(user.id);
    if (BlogData.LikedBy.includes(user.id)) {
      return;
    }

    setDisLikes(Dislikes + 1);
    axios.put(`http://localhost:4200/Blogs/${id}`, {
      ...BlogData,
      dislikes: HasDisliked ? BlogData.dislikes - 1 : BlogData.dislikes + 1,
      DislikedBy: HasDisliked
        ? BlogData.DislikedBy.filter((id) => id !== user.id)
        : [...BlogData.DislikedBy, user.id],
    });
  }
  function handledelete() {
    axios.delete(`http://localhost:4200/Blogs/${id}`).then((Response) => {
      console.log(Response);
      navigate("/Home");
    });
  }

  function handleEdit() {
    console.log(id);
    navigate("/EditBlog/" + id);
  }
  return (
    <div className="my-24 grid place-content-center">
      <div>
        <div className="">
          <div className="text-3xl font-medium w-[300px] bg-slate-200 sm:w-[800px] sm:font-semibold flex justify-start px-4 py-2">
            {BlogData.title}
          </div>
          <div className="flex justify-start w-[300px] sm:w-[800px] mt-6 text-justify whitespace-pre-line">
            {BlogData.description}
          </div>
          <div className="flex justify-between items-center align-middle">
            <div className="flex justify-start mt-10 gap-5 text-2xl">
              <div
                onClick={handleLike}
                className="p-2 bg-yellow-400 text-center px-3 rounded-lg"
              >
                <i class="fa-solid fa-thumbs-up"></i>
                <span className="mx-2">{BlogData.likes}</span>
              </div>
              <div
                onClick={handleDislike}
                className="p-2 bg-red-400 text-center px-3 rounded-lg"
              >
                <i class="fa-solid fa-thumbs-down"></i>
                <span className="mx-2">{BlogData.dislikes}</span>
              </div>
            </div>
            {BlogData.auther === user.Email ? (
              <div className="flex gap-3">
                <div
                  onClick={handleEdit}
                  className=" bg-slate-800 text-white px-5 py-1 text-xl rounded-md "
                >
                  Edit
                </div>
                <div
                  onClick={handledelete}
                  className=" bg-red-800 text-white px-5 py-1 text-xl rounded-md "
                >
                  Delete
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDisplay;
