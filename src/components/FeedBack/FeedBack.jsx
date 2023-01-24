import React, { useState } from "react";
import s from "./FeedBack.module.css";
import feedbackImages from "../data/feedbackImages";
import { ReactComponent as ErrorImg } from "../../images/images/form/worning.svg";
import ImagePictures from "../ImagePictures/ImagePictures";

const FeedBack = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errorValidation, setErrorValidation] = useState(false);
  const formHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "userEmail":
        setUserEmail(value);
        break;
      default:
        break;
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();

    if (userEmail.trim() === "" || ![...userEmail].includes("@")) {
      setErrorValidation(true);
      return;
    }
    setErrorValidation(false);
  };
  return (
    <div className={s.div} id="Contact">
      {feedbackImages.map(({ id, jpg1x, jpg2x, webp1x, webp2x, alt }) => {
        return (
          <ImagePictures
            key={id}
            jpg1x={jpg1x}
            jpg2x={jpg2x}
            webp1x={webp1x}
            webp2x={webp2x}
            alt={alt}
            className={s.img}
          />
        );
      })}
      <div className={s.padding}>
        <h2 className={s.h2}>Request Callback </h2>
        <form className={s.form} onSubmit={formSubmit}>
          <label className={s.labelUserName}>
            <input
              id="userName"
              name="userName"
              value={userName}
              className={s.input}
              type="text"
              placeholder="Enter your name"
              onChange={(e) => formHandler(e)}
            />
          </label>
          <label className={s.labelUserEmail}>
            <input
              id="userEmail"
              name="userEmail"
              value={userEmail}
              className={s.input}
              type="text"
              placeholder="Enter email*"
              onChange={(e) => formHandler(e)}
              required
              title=""
            />
            {errorValidation ? (
              <p className={s.errorMessage}>
                <ErrorImg /> This is a required field
              </p>
            ) : (
              <p className={s.errorMessage}> </p>
            )}
          </label>

          <button type="submit" className={s.btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
