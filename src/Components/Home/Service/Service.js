import React from "react";
import service1 from "../../../images/service1.png";
import service2 from "../../../images/service2.png";
import service3 from "../../../images/service3.png";
import ServicesInfo from "../Services-Info/ServicesInfo";
import "./Service.css";

const Service = () => {
  const servicesInfo = [
    {
      title: "Fluoride Treatment",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam quaerat ad expedita aspernatur temporibus",
      imgIcon: service1,
    },
    {
      title: "Cavity Filing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam quaerat ad expedita aspernatur temporibus",
      imgIcon: service2,
    },
    {
      title: "Teath Whietning",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ullam quaerat ad expedita aspernatur temporibus",
      imgIcon: service3,
    },
  ];
  return (
    <section className="container">
      <div className="row text-center">
        <div className="service-head">
          <h4 className="fw-bold section-sub-title">Our Services</h4>
          <h3 className="fw-bold section-title">Services We Provide</h3>
        </div>
      </div>
      <div className="row text-center">
        {servicesInfo.map((info) => (
          <ServicesInfo info={info} />
        ))}
      </div>
    </section>
  );
};

export default Service;
