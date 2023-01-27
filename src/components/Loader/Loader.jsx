import React from "react";
import { ReactComponent as LoaderSVG } from "../../images/gallery/loading.svg";
import s from "./Loader.module.css";
const Loader = () => {
  return <LoaderSVG className={s.rotate} />;
};

export default Loader;
