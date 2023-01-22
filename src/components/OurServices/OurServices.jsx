import React from "react";
import s from "./OurServices.module.css";
import backgroundPeople from "../../images/images/home/people.jpg";

const OurServices = () => {
  return (
    <div className={s.div}>
      <img className={s.img} src={backgroundPeople} alt="backgroundPeople" />
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
