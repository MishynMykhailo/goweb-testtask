import React from "react";
import s from "./SocialLink.module.css";
import socialLink from "../data/socialLinkImages";
const SocialLink = () => {
  return (
    <ul className={s.ul}>
      {socialLink.map(({ name, svg }) => {
        return (
          <li className={s.li} key={name}>
            <a href="/" className={s.a}>
              {svg}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
