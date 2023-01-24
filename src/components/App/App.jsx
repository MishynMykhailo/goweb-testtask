import React from "react";
import BlogPost from "../BlogPost/BlogPost";
import BusinessCases from "../BusinessCases/BusinessCases";
import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import FeedBack from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
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
