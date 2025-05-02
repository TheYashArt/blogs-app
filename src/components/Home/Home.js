import { useNavigate } from "react-router-dom";
import BlogOuterCards from "../BlogsOuterCards/BlogOuterCards";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [Search, setSearch] = useState("");
  const [Blogs, setBlogs] = useState([]);

  function handleUpload() {
    if (user) {
      navigate("/BlogUpload");
    } else {
      navigate("/Login");
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:4200/Blogs")
      .then((res) => {
        console.log("response" + res.data);
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
    if (!Search) {
      const filteredBlogs = Blogs.filter((blog) =>
        blog.title.toLowerCase().includes(Search.toLowerCase())
      );
      setBlogs(filteredBlogs);
    } else {
      axios
        .get("http://localhost:4200/Blogs")
        .then((res) => {
          console.log("response" + res.data);
          setBlogs(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="my-24">
      <div className="flex justify-center">
        <div className="flex gap-4 justify-center border border-black w-fit px-6 py-1 rounded-md items-center">
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Enter a Title to search"
              className="bg-none outline-none w-[300px] sm:w-[500px] "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8 mr-8">
        <button
          onClick={handleUpload}
          className="bg-slate-700 px-3 py-2 w-[200px] sm:w-[300px] text-white ml-4 mb-8"
        >
          Upload Your blog
        </button>
      </div>
      <div className="flex flex-col gap-9 sm:grid sm:grid-cols-2">
        {Blogs.map((blog, index) => {
          console.log("Blog data", blog);
          return (
            <div
              onClick={() => {
                navigate("/BlogDisplay/" + blog.id);
                console.log(blog.id);
              }}
            >
              <BlogOuterCards
                key={index}
                title={blog.title}
                description={blog.description}
                author={blog.auther}
                time={blog.date}
                likes={blog.likes}
                dislikes={blog.dislikes}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
