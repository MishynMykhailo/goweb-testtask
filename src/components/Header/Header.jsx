import React from "react";
import svgLogo from "../../images/logoMobile.svg";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={s.div}>
      <img src={svgLogo} alt="logo" className={s.img}></img>
      <nav className={s.navMenu}>
        <ul className={s.ul}>
          <li className={s.li}>
            <a className={s.a} href="#Home">
              Home
            </a>
          </li>
          <li className={s.li}>
            <a className={s.a} href="#About">
              About
            </a>
          </li>
          <li className={s.li}>
            <a className={s.a} href="#Cases">
              Cases
            </a>
          </li>
          <li className={s.li}>
            <a className={s.a} href="#Blog">
              Blog
            </a>
          </li>
          <li className={s.li}>
            <a className={s.a} href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
