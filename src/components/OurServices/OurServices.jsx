import React from "react";
import s from "./OurServices.module.css";
const OurServices = () => {
  return (
    <div className={s.div}>
      <p className={s.preH2}>What you are looking for</p>
      <h2 className={s.h2}>We provide bespoke solutions</h2>
      <p className={s.postH2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
        ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
        illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste
        maiores deleniti?
      </p>
      <button className={s.btn}>Read More</button>
    </div>
  );
};

export default OurServices;
