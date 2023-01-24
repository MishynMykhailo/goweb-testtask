import React from "react";
import s from "./BusinessCases.module.css";
import buisnessCasesImages from "../data/buisnessCasesImages";
import ImagePictures from "../ImagePictures/ImagePictures";

const BusinessCases = () => {
  return (
    <div className={s.div} id="Cases">
      <div className={s.padding}>
        <p className={s.preH2}>This is what we do</p>
        <h2 className={s.h2}>Business Cases</h2>
        <p className={s.postH2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.ul}>
          {buisnessCasesImages.map(
            ({ id, jpg1x, jpg2x, webp1x, webp2x, alt }) => {
              return (
                <li key={id}>
                  <ImagePictures
                    key={id}
                    jpg1x={jpg1x}
                    jpg2x={jpg2x}
                    webp1x={webp1x}
                    webp2x={webp2x}
                    alt={alt}
                    className={s.img}
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default BusinessCases;
