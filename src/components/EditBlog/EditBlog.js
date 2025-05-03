import axios from "axios";
import { use, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function EditBlog(){
    const navigate = useNavigate()
    const {BlogId} = useParams()
    const [BlogData, setBlogData] = useState({})
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:4200/Blogs/"+BlogId)
        .then((Response)=>{
            setBlogData(Response.data)
            setTitle(Response.data.title)
            setDescription(Response.data.description)
        })
    },[])

    function handleUpload(){
        axios.patch("http://localhost:4200/Blogs/"+BlogId, {
            ...BlogData,
            title: Title,
            description: Description
        })
        .then((Response)=>{
            console.log("Success")
            navigate("/Home")
        })
    }
    return(
        <div className="grid place-content-center ">
      <div className="mt-24">
        <div className="bg-slate-400 w-fit px-6 py-6 rounded-sm">
          <div>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={Title}
              type="text"
              placeholder="Title"
              className="bg-none outline-none w-[300px] sm:w-[800px] border text-2xl border-slate-700 px-2 py-1 rounded-sm"
            />
          </div>
          <div>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={Description}
              placeholder="Description"
              className="bg-none outline-none w-[300px] sm:w-[800px] border text-xl border-slate-700 px-2 py-1 rounded-sm my-4"
              rows={10}
              cols={50}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleUpload}
              className="bg-slate-700 px-8 py-3 w-[300px] text-white"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default EditBlog