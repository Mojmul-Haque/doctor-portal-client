import React from "react";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Doctors from "../Doctros/Doctors";
import Features from "../Features/Features";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Service />
      <Features />
      <MakeAppoinment />
      <Testimonial />
      <Blog />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
