import React from "react";
import s from "./BlogPost.module.css";
import coffeImg from "../../images/images/home/blog.jpg";
const BlogPost = () => {
  return (
    <div className={s.div} id="Blog">
      <img className={s.img} src={coffeImg} alt="coffeImg" />
      <div className={s.padding}>
        <p className={s.preH2}>April 16 2020</p>
        <h2 className={s.h2}>Blog Post One</h2>
        <p className={s.postH2}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.btn}>Read Our Blog</button>
      </div>
    </div>
  );
};

export default BlogPost;
