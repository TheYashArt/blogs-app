import BlogOuterCards from "../BlogsOuterCards/BlogOuterCards";

function Home() {
  const blogsData = [
    {
      title: "Blog 1", // Changed "Title" to "title"
      description: "This is a simple blog description.", // Changed "Description" to "description"
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
    <div>
      {blogsData.map((blog, index) => {
        console.log("Blog data", blog)
        return (
          <BlogOuterCards key={index} title={blog.title} description={blog.description} />
        );
      })}
    </div>
  );
}

export default Home;
