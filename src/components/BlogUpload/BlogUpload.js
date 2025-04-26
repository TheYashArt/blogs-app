function BlogUpload(){
    return(
        <div className="grid place-content-center ">
            <div className="mt-24">
                <div className="bg-slate-400 w-fit px-6 py-6 rounded-sm">
                    <div>
                        <input type="text" placeholder="Title" className="bg-none outline-none w-[300px] sm:w-[800px] border text-2xl border-slate-700 px-2 py-1 rounded-sm" />
                    </div>
                    <div>
                        <textarea placeholder="Description" className="bg-none outline-none w-[300px] sm:w-[800px] border text-xl border-slate-700 px-2 py-1 rounded-sm my-4" rows={10} cols={50}></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-slate-700 px-8 py-3 w-[300px] text-white">Upload</button>
                    </div>
                </div>     
            </div>
        </div>
    )
}
export default BlogUpload;