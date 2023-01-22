import React from "react";
import s from "./FeedBack.module.css";
import contactPhoto from "../../images/images/home/contact.jpg";

const FeedBack = () => {
  return (
    <div className={s.div}>
      <img className={s.img} src={contactPhoto} alt="contactPhoto" />
      <div className={s.padding}>
        <h2 className={s.h2}>Request Callback </h2>
        <form className={s.form}>
          <input
            className={s.input}
            type="text"
            placeholder="Enter your name"
          />
          <input className={s.input} type="text" placeholder="Enter email*" />
          <button type="submit" className={s.btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
