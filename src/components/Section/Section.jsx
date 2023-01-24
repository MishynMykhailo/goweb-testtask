import React from "react";
import s from "./Section.module.css";
const Section = ({ children, padTop, padBot, width }) => {
  return (
    <div
      className={s.padding}
      styles={{
        paddingTop: padTop,
        paddingBottom: padBot,
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
