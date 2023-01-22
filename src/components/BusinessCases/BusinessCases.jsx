import React from "react";
import s from "./BusinessCases.module.css";
import cases1 from "../../images/images/cases/cases1.jpg";
import cases2 from "../../images/images/cases/cases2.jpg";
import cases3 from "../../images/images/cases/cases3.jpg";
import cases4 from "../../images/images/cases/cases4.jpg";
import cases5 from "../../images/images/cases/cases5.jpg";
import cases7 from "../../images/images/cases/cases7.jpg";

const BusinessCases = () => {
  const images = [
    { name: "cases1", img: cases1 },
    { name: "cases3", img: cases3 },
    { name: "cases5", img: cases5 },
    { name: "cases7", img: cases7 },
    { name: "cases2", img: cases2 },
    { name: "cases4", img: cases4 },
  ];
  return (
    <div className={s.div}>
      <div className={s.padding}>
        <p className={s.preH2}>This is what we do</p>
        <h2 className={s.h2}>Business Cases</h2>
        <p className={s.postH2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.ul}>
          {images.map(({ name, img }) => {
            return (
              <li className={s.li} key={name}>
                <img src={img} alt={name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BusinessCases;
