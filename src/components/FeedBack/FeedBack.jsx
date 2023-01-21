import React from "react";
import s from "./FeedBack.module.css";
const FeedBack = () => {
  return (
    <div className={s.div}>
      <h2 className={s.h2}>Request Callback </h2>
      <form className={s.form}>
        <input className={s.input} type="text" placeholder="Enter your name" />
        <input className={s.input} type="text" placeholder="Enter email*" />
        <button type="submit" className={s.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default FeedBack;
