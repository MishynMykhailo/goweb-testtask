import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import BusinessCases from "../BusinessCases/BusinessCases";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import s from "./App.module.css";

import FeedBack from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";

function App() {
  return (
    <>
      <Container>
        <Hero />

        <OurServices />

        <BusinessCases />

        <BlogPost />

        <OurTeam />

        <FeedBack />
        <Footer />
      </Container>
    </>
  );
}

export default App;
