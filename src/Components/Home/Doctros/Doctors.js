import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import doctorImg from "../../../images/appointemntDoctor.png";
import React from "react";
import "./Dotor.css";

const Doctors = () => {
  const doctorInfo = [
    {
      name: "Dr. Meftahul Jannat",
      contact: " +1234568958",
      image: doctorImg,
    },
    {
      name: "Dr. Meftahul Jannat",
      contact: " +1234568958",
      image: doctorImg,
    },
    {
      name: "Dr. Meftahul Jannat",
      contact: " +1234568958",
      image: doctorImg,
    },
  ];
  return (
    <section>
      <div className="row text-center">
        <h4 className="section-sub-title">Our Doctors</h4>
        {doctorInfo.map((info) => (
          <div className="col-lg-4">
            <div className="all-doctor">
              <img className="img-fluid" src={info.image} alt="doctorImg" />
              <h6>{info.name}</h6>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} />
                {info.contact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
