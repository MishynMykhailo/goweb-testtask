import React from "react";
import s from "./ButtonFirst.module.css";
import arrowNext from "../../images/images/next.svg";
const ButtonFirst = ({ children }) => {
  return (
    <button className={s.btn}>
      <img className={s.arrowNext} src={arrowNext} alt="arrowNext" />
      Read More
    </button>
  );
};

export default ButtonFirst;
