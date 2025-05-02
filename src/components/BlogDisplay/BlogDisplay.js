import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDisplay() {
  const id = useParams().id;

  const [BlogData, setBlogData] = useState({});
  const [likes, setLikes] = useState(0)
  const [Dislikes, setDisLikes] = useState(0)

  useEffect(() => {
    axios
      .get(`http://localhost:4200/Blogs/${id}`)
      .then((res) => {
        setBlogData(res.data);
        setLikes(res.data.likes)
        setDisLikes(res.data.dislikes)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleLike() {
    console.log("Like clicked");
    setLikes(likes + 1)
    axios
      .put(`http://localhost:4200/Blogs/${id}`, {
        ...BlogData,
        likes: likes + 1,
      })

      axios
      .get(`http://localhost:4200/Blogs/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data);
        setLikes(res.data.likes)
        setDisLikes(res.data.dislikes)
        console.log(likes, Dislikes);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  function handleDislike() {
    console.log("Dislike clicked");
    setDisLikes(Dislikes + 1)
    axios
      .put(`http://localhost:4200/Blogs/${id}`, {
        ...BlogData,
        dislikes: Dislikes + 1,
      })

      axios
      .get(`http://localhost:4200/Blogs/${id}`)
      .then((res) => {
        setBlogData(res.data);
        setLikes(res.data.likes)
        setDisLikes(res.data.dislikes)
      })
      .catch((error) => {
        console.log(error);
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
                <span className="mx-2" >{BlogData.likes}</span>
              </div>
              <div onClick={handleDislike} className="p-2 bg-red-400 text-center px-3 rounded-lg">
                <i class="fa-solid fa-thumbs-down"></i>
                <span className="mx-2" >{BlogData.dislikes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDisplay;
