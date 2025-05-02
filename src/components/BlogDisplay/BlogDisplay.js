import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDisplay() {
  const id = useParams().id;

  const [BlogData, setBlogData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4200/Blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleLike() {
    setBlogData((prev) => ({ ...prev, likes: prev.likes + 1 }));
    axios
      .patch("http://localhost:4200/Blogs/like/" + id, {likes: BlogData.likes})

      .then((res) => {
        console.log(res.data);
        // alert("Blog Liked Successfully");
      })
      .catch((error) => {
        console.log(error);
        // alert("Blog Like Failed");
      });
  }

  function handleDislike() {
    setBlogData((prev) => ({ ...prev, dislikes: prev.dislikes + 1 }));

    axios
      .patch("http://localhost:4200/Blogs/dislike/" + id, {dislikes: BlogData.dislikes})

      .then((res) => {
        console.log(res.data);
        // alert("Blog Disliked Successfully");
      })
      .catch((error) => {
        console.log(error);
        // alert("Blog Dislike Failed");
      });
  }

  return (
    <div className="my-24 grid place-content-center">
      <div>
        <div className="">
          <div className="text-3xl font-medium w-[300px] bg-slate-200 sm:w-[800px] sm:font-semibold flex justify-start px-4 py-2">
            {BlogData.title}
          </div>
          <div className="flex justify-start w-[300px] sm:w-[800px] mt-6 text-justify ">
            {BlogData.description}
          </div>
          <div>
            <div className="flex justify-start mt-10 gap-5 text-2xl">
              <div onClick={handleLike} className="p-2 bg-yellow-400 text-center px-3 rounded-lg">
                <i class="fa-solid fa-thumbs-up"></i>
                <span >{BlogData.likes}</span>
              </div>
              <div onClick={handleDislike} className="p-2 bg-red-400 text-center px-3 rounded-lg">
                <i class="fa-solid fa-thumbs-down"></i>
                <span >{BlogData.dislikes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDisplay;
