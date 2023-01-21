import React from "react";
import s from "./PhotoSection.module.css";
const PhotoSection = ({ photo, alt }) => {
  return <img src={photo} alt={alt} />;
};

export default PhotoSection;
