import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import BusinessCases from "../BusinessCases/BusinessCases";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import s from "./App.module.css";
import contactPhoto from "../../images/images/home/contact.jpg";
import FeedBack from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import PhotoSection from "../PhotoSection/PhotoSection";

import backgroundPeople from "../../images/images/home/people.jpg";
import coffeImg from "../../images/images/home/blog.jpg";
function App() {
  return (
    <>
      <Container>
        <div className={s.backgroundHero}>
          <Section>
            <Header />
            <Hero />
          </Section>
        </div>
        <PhotoSection photo={backgroundPeople} alt="backgroundPeople" />
        <div style={{ backgroundColor: "#28a745" }}>
          <Section>
            <OurServices />
          </Section>
        </div>
        <div style={{ backgroundColor: "ffffff" }}>
          <Section>
            <BusinessCases />
          </Section>
        </div>
        <PhotoSection photo={coffeImg} alt="backgroundPeople" />
        <div style={{ backgroundColor: "#0284d0" }}>
          <Section>
            <BlogPost />
          </Section>
        </div>
        <div style={{ backgroundColor: "ffffff" }}>
          <Section>
            <OurTeam />
          </Section>
        </div>
        <PhotoSection photo={contactPhoto} alt="contactPhoto" />
        <div style={{ backgroundColor: "#f4f4f4" }}>
          <Section>
            <FeedBack />
          </Section>
        </div>
        <div style={{ backgroundColor: "#333333" }}>
          <Section>
            <Footer />
          </Section>
        </div>
      </Container>
    </>
  );
}

export default App;
