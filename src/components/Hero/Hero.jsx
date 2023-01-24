import React from "react";

import s from "./Hero.module.css";
import { ReactComponent as ArrowNext } from "../../images/images/next.svg";
const Hero = () => {
  return (
    <>
      <div className={s.div} id="Home">
        <div className={s.padding}>
          <h1 className={s.mainText}>The Sky Is The Limit</h1>
          <h2 className={s.secondaryText}>
            We provide world class financial assistance
          </h2>
          <button className={s.btn}>
            <div className={s.arrowNext}>
              <ArrowNext />
            </div>
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
