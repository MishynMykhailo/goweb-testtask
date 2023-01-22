import React from "react";
import s from "./Section.module.css";
const Section = ({ children }) => {
  return (
    <div
      className={s.div}
      // style={{ paddingTop: `${padTop}`, paddingBottom: `${padBot}` }}
    >
      {children}
    </div>
  );
};

export default Section;
