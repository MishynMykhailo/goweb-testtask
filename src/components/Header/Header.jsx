import React, { useEffect, useState } from "react";
import svgLogo from "../../images/logoMobile.svg";
import s from "./Header.module.css";
const Header = () => {
  const checkOnPosition = (elem, x, y) => {
    const elClass = elem.classList;
    if (320 <= x && x < 768) {
      if (y >= 120) {
        if (elClass.contains(`${s.fixed}`)) {
          return;
        }
        elClass.add(`${s.fixed}`);
      } else if (y < 120) {
        if (!elClass.contains(`${s.fixed}`)) {
          return;
        }
        elClass.remove(`${s.fixed}`);
      }
      return;
    }
    if (768 <= x || 1360 <= x) {
      if (y >= 70) {
        if (elClass.contains(`${s.fixed}`)) {
          return;
        }
        elClass.add(`${s.fixed}`);
      } else if (y < 70) {
        if (!elClass.contains(`${s.fixed}`)) {
          return;
        }
        elClass.remove(`${s.fixed}`);
      }
    }
  };
  useEffect(() => {
    const scrollListener = () => {
      const divElement = document.getElementById("header");
      const widthWindow = window.innerWidth;
      const heightWindow = window.scrollY;
      checkOnPosition(divElement, widthWindow, heightWindow);
    };
    document.addEventListener("scroll", scrollListener);
    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={s.div} id="header">
      <div className={s.padding}>
        <a href="/">
          <img src={svgLogo} alt="logo" className={s.img}></img>
        </a>
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
    </div>
  );
};

export default Header;
