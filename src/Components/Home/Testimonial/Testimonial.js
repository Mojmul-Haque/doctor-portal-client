import React from "react";
import "./Testimonial.css";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import TestimonialInfo from "../TestimonialInfo/TestimonialInfo";

const Testimonial = () => {
  const patientsInfo = [
    {
      name: "Al-Amin",
      address: "California",
      image: patient1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat vel accusamus beatae rem sunt sit pariatur ipsa suscipit, totam doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sequi nostrum iure accusamus aut amet quia ipsum eum velit itaque ",
    },
    {
      name: "Istia Sultana",
      address: "California",
      image: patient2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat vel accusamus beatae rem sunt sit pariatur ipsa suscipit, totam doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sequi nostrum iure accusamus aut amet quia ipsum eum velit itaque ",
    },
    {
      name: "Meftahul Jannat",
      address: "California",
      image: patient3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat vel accusamus beatae rem sunt sit pariatur ipsa suscipit, totam doloribus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sequi nostrum iure accusamus aut amet quia ipsum eum velit itaque ",
    },
  ];
  return (
    <section className="testmonial-part">
      <div className="container">
        <div className="row">
          <h4 className="section-sub-title">Testimonial</h4>
          <h3 className="section-title">
            What's Our Patients <span className="d-block">Says</span>
          </h3>
        </div>
        <div className="row">
          {patientsInfo.map((info) => (
            <TestimonialInfo info={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
