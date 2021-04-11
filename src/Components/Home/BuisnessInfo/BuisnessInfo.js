import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const BuisnessInfo = () => {
  const buisnessInfo = [
    {
      title: "Openng Hours",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: faClock,
      background: "#1CC7C1",
    },
    {
      title: "Visit Our Location",
      description: "Broklyn,NY,100036,United States",
      icon: faMapMarkerAlt,
      background: "#3A4256",
    },
    {
      title: "Contact us Now",
      description: "+000 123456789",
      icon: faPhoneAlt,
      background: "#1CC7C1",
    },
  ];
  return (
    <section className="d-flex justify-content-center">
      <div className="row">
        {buisnessInfo.map((info) => (
          <InfoCard info={info} key={info.title} />
        ))}
      </div>
    </section>
  );
};

export default BuisnessInfo;
