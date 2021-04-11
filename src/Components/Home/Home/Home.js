import React from "react";
import Features from "../Features/Features";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Service />
      <Features />
      <MakeAppoinment />
    </div>
  );
};

export default Home;
