import React, { useState } from "react";
import s from "./FeedBack.module.css";
import feedbackImages from "../data/feedbackImages";
import { ReactComponent as ErrorImg } from "../../images/form/worning.svg";
import ImagePictures from "../ImagePictures";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FeedBack = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorValidation, setErrorValidation] = useState(false);
  const formHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };
  const formHandlerSubmit = async (e) => {
    const { email: emailTarget, name: nameTarget } = e.target.elements;
    const { name: nameEm, value: valueEm } = emailTarget;
    const { name: nameNa, value: valueNa } = nameTarget;
    const inputValues = {
      [nameEm]: valueEm,
      [nameNa]: valueNa,
    };
    console.log(inputValues);
    if (email.trim() === "" || ![...email].includes("@")) {
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
  };

  const reset = () => {
    setName("");
    setEmail("");
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
        <form method="post" className={s.form} onSubmit={formHandlerSubmit}>
          <input type="hidden" name="form-name" value="feedback" />
          <label className={s.labelName}>
            <input
              id="name"
              name="name"
              value={name}
              className={s.input}
              type="text"
              placeholder=" "
              onChange={(e) => formHandler(e)}
            />
            <p className={s.plf}>Enter your name</p>
          </label>
          <label className={s.labelEmail}>
            <input
              id="email"
              name="email"
              value={email}
              className={s.input}
              type="text"
              placeholder=" "
              onChange={(e) => formHandler(e)}
              required
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
