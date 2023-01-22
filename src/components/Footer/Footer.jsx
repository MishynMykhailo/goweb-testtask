import React from "react";
import s from "./Footer.module.css";
import ln from "../../images/images/social/ln.svg";
import fb from "../../images/images/social/fb.svg";
import tw from "../../images/images/social/tw.svg";
import yt from "../../images/images/social/yt.svg";
const Footer = () => {
  const social = [
    { name: "facebook", img: fb },
    { name: "twitter", img: tw },
    { name: "youtube", img: yt },
    { name: "linkedIn", img: ln },
  ];
  return (
    <div className={s.div}>
      <div className={s.padding}>
        <ul className={s.ul}>
          {social.map(({ name, img }) => {
            return (
              <li className={s.li} key={name}>
                <img className={s.img} src={img} alt={name} />
              </li>
            );
          })}
          ;
        </ul>
        <p className={s.p}>Copyright © 2021 - FinanceLedger</p>
      </div>
    </div>
  );
};

export default Footer;
