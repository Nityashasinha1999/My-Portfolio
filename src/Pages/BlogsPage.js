import React from "react";
import Tittle from "../Components/Tittle";
import allBlogs from "../Components/allBlogs";

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Tittle title={"Recent Projects"} span={"Recent Projects"} />
      </div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p className="h7">
        For more projects you may visit ,
        <a
          className="ml-5"
          href="  
    https://github.com/Nityashasinha1999"
        >
          {" "}
          https://github.com/Nityashasinha1999
        </a>
      </p>
    </div>
  );
}

export default BlogsPage;
