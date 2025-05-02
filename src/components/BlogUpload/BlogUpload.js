import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogUpload(){
    const today = new Date();
    const navigate  = useNavigate()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [likes, setlikes] = useState(0)
    const [dislikes, setdislikes] = useState(0)
    const user = JSON.parse(localStorage.getItem("user"));
    const auther = user.Email;

    function handleUpload(){
        axios.post("http://localhost:4200/Blogs",{title, description, date, auther, likes, dislikes}).then((res)=>{
            console.log(res.data);
            if(res.data){
                alert("Blog Uploaded Successfully")
                navigate("/Home")

            }else{
                alert("Blog Upload Failed")
            }
        }).catch((error)=>{
            console.log(error);
            alert("Blog Upload Failed")
        })
    }
    return(
        <div className="grid place-content-center ">
            <div className="mt-24">
                <div className="bg-slate-400 w-fit px-6 py-6 rounded-sm">
                    <div>
                        <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title" className="bg-none outline-none w-[300px] sm:w-[800px] border text-2xl border-slate-700 px-2 py-1 rounded-sm" />
                    </div>
                    <div>
                        <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" className="bg-none outline-none w-[300px] sm:w-[800px] border text-xl border-slate-700 px-2 py-1 rounded-sm my-4" rows={10} cols={50}></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleUpload} className="bg-slate-700 px-8 py-3 w-[300px] text-white">Upload</button>
                    </div>
                </div>     
            </div>
        </div>
    )
}
export default BlogUpload;