import React from "react";
import s from "./OurServices.module.css";
import ourServicesImages from "../data/ourServicesImages";
import ImagePictures from "../ImagePictures/ImagePictures";
const OurServices = () => {
  return (
    <div className={s.div} id="About">
      {ourServicesImages.map(({ id, jpg1x, jpg2x, webp1x, webp2x, alt }) => {
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
        <p className={s.preH2}>What you are looking for</p>
        <h2 className={s.h2}>We provide bespoke solutions</h2>
        <p className={s.postH2}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={s.btn}>Read More</button>
      </div>
    </div>
  );
};

export default OurServices;
