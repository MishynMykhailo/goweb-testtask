import React from "react";
import s from "./ButtonRevers.module.css";
import { ReactComponent as ArrowNext } from "../../images/images/next.svg";
const reverseStyle = {};
const ButtonRevers = ({ text, color }) => {
  return (
    <button className={s.btn}>
      <div className={s.arrowNext} style={{ color }}>
        <ArrowNext />
      </div>
      {text}
    </button>
  );
};

export default ButtonRevers;
