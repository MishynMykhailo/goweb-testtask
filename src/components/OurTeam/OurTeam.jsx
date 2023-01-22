import React from "react";
import s from "./OurTeam.module.css";
import person1 from "../../images/images/team/person1.jpg";
import person2 from "../../images/images/team/person2.jpg";
import person3 from "../../images/images/team/person3.jpg";

const OurTeam = () => {
  const images = [
    {
      name: "person1",
      img: person1,
      personName: "John Doe",
      position: "President",
    },
    {
      name: "person2",
      img: person2,
      personName: "Jane Doe",
      position: "Vice President",
    },
    {
      name: "person3",
      img: person3,
      personName: "Steve Smith",
      position: "Marketing Head",
    },
  ];
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
          {images.map(({ name, img, personName, position }) => {
            return (
              <li className={s.li} key={name}>
                <img className={s.img} src={img} alt={name} />
                <p className={s.personName}>{personName}</p>
                <p className={s.position}>{position}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
