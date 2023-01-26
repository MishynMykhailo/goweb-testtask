import React, { useState } from "react";
import s from "./FeedBack.module.css";
import feedbackImages from "../data/feedbackImages";
import { ReactComponent as ErrorImg } from "../../images/images/form/worning.svg";
import ImagePictures from "../ImagePictures/ImagePictures";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
  const formHandlerSubmit = async (e) => {
    e.preventDefault();
    const { userEmail: emailTarget, userName: nameTarget } = e.target.elements;
    const { name: nameEm, value: valueEm } = emailTarget;
    const { name: nameNa, value: valueNa } = nameTarget;
    const inputValues = {
      [nameEm]: valueEm,
      [nameNa]: valueNa,
    };
    console.log(inputValues);
    if (userEmail.trim() === "" || ![...userEmail].includes("@")) {
      setErrorValidation(true);
      return;
    }
    setErrorValidation(false);
    reset();

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "feedback", ...inputValues }),
    });
    try {
      alert("Success!");
    } catch (error) {
      alert(error);
    }
  };

  const reset = () => {
    setUserName("");
    setUserEmail("");
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
        <form
          name="feedback"
          method="post"
          className={s.form}
          onSubmit={formHandlerSubmit}
        >
          <label className={s.labelUserName}>
            <input
              id="userName"
              name="userName"
              value={userName}
              className={s.input}
              type="text"
              placeholder=" "
              onChange={(e) => formHandler(e)}
            />
            <p className={s.plf}>Enter your name</p>
          </label>
          <label className={s.labelUserEmail}>
            <input
              id="userEmail"
              name="userEmail"
              value={userEmail}
              className={s.input}
              type="text"
              placeholder=" "
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
            <p className={s.plf}>Enter email*</p>
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
