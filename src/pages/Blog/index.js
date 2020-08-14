import React from "react";
import "./styles.scss";
import Post from "./Post";
import SideBarItem from "./SideBarItem";

const postData = [
  {
    id: 1,
    title: "Making the best pizza",
    img: "",
    author: "By Admin",
    category: "Recipes",
    comments: 3,
    date: "Aug 12, 2020",
  },
  {
    id: 2,
    title: "Making the best pizza",
    img: "",
    author: "By Admin",
    category: "Recipes",
    comments: 3,
    date: "Aug 12, 2020",
  },
  {
    id: 3,
    title: "Making the best pizza",
    img: "",
    author: "By Admin",
    category: "Recipes",
    comments: 3,
    date: "Aug 12, 2020",
  },
];

const Blog = () => {
  return (
    <section className="blog section">
      <div className="blog-content">
        <div className="posts">
          {postData.map((item) => (
            <Post key={item.id} data={item} />
          ))}
        </div>

        <div className="side-bar">
          <h2 className="side-bar-title">Most Popular Posts</h2>

          <div className="side-bar-content">
            {postData.map((item) => (
              <SideBarItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
