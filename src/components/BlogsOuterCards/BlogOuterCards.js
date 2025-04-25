function BlogOuterCards({title, description}) {
  // console.log(title, description);
  return (
    <div className="blog-cards">
      <div className="flex flex-col gap-9 sm:flex sm:flex-row sm:justify-around sm:w-full my-14 sm:my-18">
        <div className="bg-slate-200 px-5 py-4 rounded shadow-lg w-[320px] sm:w-[600px] h-[400px] mt-20 mx-auto flex flex-col justify-center items-center">
          <div className="text-3xl font-semibold text-slate-800">{title}</div>
          <div className="mt-4">
            <p>{description}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default BlogOuterCards;