function BlogOuterCards({ title, description, author, time, likes, dislikes }) {
  // console.log(title, description);
  return (
    <div className="blog-cards">
      <div className="flex flex-col gap-9 sm:flex sm:flex-row sm:justify-around sm:w-full">
        <div className="bg-slate-200 px-10 py-8 rounded shadow-lg w-[320px] sm:w-[600px] h-[300px] sm:h-[450px] mx-auto">
          <div className="flex justify-start text-sm italic">
            Created By : {author}
          </div>
          <div className="flex justify-start text-sm italic">
            Created At : {time}
          </div>
          <div className="text-3xl font-semibold text-slate-800 flex justify-start">
            {title}
          </div>
          <div className="mt-4 flex justify-start">
            <div className="overflow-hidden text-justify text-ellipsis h-[260px]">
              {description}
            </div>
          </div>
          <div className="flex justify-end ">
            <div className="sm:flex gap-5 text-lg hidden">
              <div className="p-1 bg-yellow-400 text-center px-2 rounded-lg">
                <i class="fa-solid fa-thumbs-up" />
                <span className="mx-2">{likes}</span>
              </div>
              <div className="p-1 bg-red-400 text-center px-2 rounded-lg">
                <i class="fa-solid fa-thumbs-down" />
                <span className="mx-2">{dislikes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogOuterCards;
