import React from "react";
import postImg from "assets/img/pizza-post1.jpg";
import "./styles.scss";

const Post = ({ data }) => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={postImg} alt="pizza-post1" />
      </div>
      <h2 className="post-title">{data.title}</h2>
      <div className="post-tags">
        <span>{data.author}</span>
        <span className="post-tags-separator"></span>
        <span>{data.category}</span>
        <span className="post-tags-separator"></span>
        <span>{data.comments} comments</span>
        <span className="post-tags-separator"></span>
        <span>{data.date}</span>
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        praesentium veritatis voluptatibus totam, autem perferendis voluptas
        molestiae, magni dignissimos dolores minus iusto animi explicabo nulla
        vel! Assumenda provident excepturi earum, delectus blanditiis velit
        animi ad minus facilis sunt esse modi!
      </p>
    </div>
  );
};

export default Post;
