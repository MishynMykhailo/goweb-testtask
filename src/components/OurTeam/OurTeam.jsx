import React from "react";
import s from "./OurTeam.module.css";
import ourTeamImages from "../data/ourTeamImages";

const OurTeam = () => {
  return (
    <div className={s.div}>
      <div className={s.padding}>
        <p className={s.preH2}>Who we are</p>
        <h2 className={s.h2}>Our Professional Team</h2>
        <p className={s.postH2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.ul}>
          {ourTeamImages.map(
            ({
              id,

              jpg1x,
              jpg2x,
              webp1x,
              webp2x,
              personName,
              position,
              alt,
            }) => {
              return (
                <li className={s.li} key={id}>
                  <picture>
                    <source
                      srcSet={`${webp1x} 1x, ${webp2x} 2x`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${jpg1x} 1x, ${jpg2x} 2x`}
                      type="image/jpeg"
                    />
                    <img className={s.img} src="#" alt={alt} />
                  </picture>
                  <p className={s.personName}>{personName}</p>
                  <p className={s.position}>{position}</p>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
