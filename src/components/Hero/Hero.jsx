import React from "react";
import s from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={s.section}>
      <h1 className={s.mainText}>The Sky Is The Limit</h1>
      <h2 className={s.secondaryText}>
        We provide world class financial assistance
      </h2>
      <button className={s.btn}>Read More</button>
    </div>
  );
};

export default Hero;
