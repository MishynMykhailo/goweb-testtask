import React from "react";
import s from "./BlogPost.module.css";
import blogPostImages from "../data/blogPostImages";
import ImagePictures from "../ImagePictures";

const BlogPost = () => {
  return (
    <div className={s.div} id="Blog">
      {blogPostImages.map(({ id, jpg1x, jpg2x, webp1x, webp2x, alt }) => {
        return (
          <ImagePictures
            key={id}
            jpg1x={jpg1x}
            jpg2x={jpg2x}
            webp1x={webp1x}
            webp2x={webp2x}
            alt={alt}
            className={s.img}
          />
        );
      })}
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
