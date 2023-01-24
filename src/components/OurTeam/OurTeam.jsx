import React from "react";
import s from "./OurTeam.module.css";
import ourTeamImages from "../data/ourTeamImages";
import socialLink from "../data/socialLinkImages";
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
                  <div className={s.picture}>
                    <picture key={id} className={s.pic}>
                      <source
                        srcSet={`${webp2x} 2x, ${webp1x} 1x`}
                        type="image/webp"
                      />
                      <source
                        srcSet={`${jpg2x} 2x, ${jpg1x} 1x`}
                        type="image/jpeg"
                      />
                      <img className={s.img} src="#" alt={alt} />
                    </picture>
                    <div className={s.social}>
                      <ul className={s.social__ul}>
                        {socialLink.map(({ name, svg }) => {
                          return (
                            <li className={s.social__li} key={name}>
                              <a href="/" className={s.social__a}>
                                {svg}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
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
