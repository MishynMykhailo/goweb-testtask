import React from "react";
import s from "./Footer.module.css";
import SocialLink from "../SocialLink/SocialLink";
const Footer = () => {
  return (
    <div className={s.div}>
      <div className={s.padding}>
        <div className={s.footer}>
          <SocialLink />
        </div>
        <p className={s.p}>Copyright © 2021 - FinanceLedger</p>
      </div>
    </div>
  );
};

export default Footer;
