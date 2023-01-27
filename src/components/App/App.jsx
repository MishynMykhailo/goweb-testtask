import React, { Suspense, lazy } from "react";
import Loader from "components/Loader";
import Container from "../Container";
import Header from "../Header";
import Hero from "../Hero";
// import OurServices from "../OurServices/OurServices";
// import BlogPost from "../BlogPost/BlogPost";
// import BusinessCases from "../BusinessCases/BusinessCases";
// import OurTeam from "../OurTeam/OurTeam";
// import FeedBack from "../FeedBack/FeedBack";
// import Footer from "../Footer/Footer";
const OurServices = lazy(() => import("../OurServices"));
const BlogPost = lazy(() => import("../BlogPost"));
const BusinessCases = lazy(() => import("../BusinessCases"));
const OurTeam = lazy(() => import("../OurTeam"));
const FeedBack = lazy(() => import("../FeedBack"));
const Footer = lazy(() => import("../Footer"));
function App() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
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
    </Suspense>
  );
}

export default App;
