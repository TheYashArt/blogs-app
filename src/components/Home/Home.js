import BlogOuterCards from "../BlogsOuterCards/BlogOuterCards";

function Home() {
  const blogsData = [
    {
      title: "Blog 1",
      description: "This is a simple blog description.",
    },
    {
      title: "Blog 2",
      description: "This is a sample blog description.",
    },
    {
      title: "Blog 3",
      description: "This is a sample blog description.",
    },
    {
      title: "Blog 4",
      description: "This is a sample blog description.",
    },
  ];
  return (
    <div className="my-24">
      <div className="flex justify-center">
        <div className="flex gap-4 justify-center border border-black w-fit px-6 py-1 rounded-md items-center">
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter a Title to search"
              className="bg-none outline-none w-[300px] sm:w-[500px] "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 sm:grid sm:grid-cols-2">
        {blogsData.map((blog, index) => {
          console.log("Blog data", blog);
          return (
            <BlogOuterCards
              key={index}
              title={blog.title}
              description={blog.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;