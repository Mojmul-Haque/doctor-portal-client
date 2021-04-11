import React from "react";
import featuresImg from "../../../images/features.png";
import "./features.css";
const Features = () => {
  return (
    <section className="features-part container">
      <div className="row">
        <div className="col-lg-5">
          <div className="features-img">
            <img src={featuresImg} alt="featuresImg" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="features-text">
            <h3 className="section-title">
              Exceptional Dental{" "}
              <span className="d-block">Care,on Your Terms</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              itaque tempore nisi iure ab sint, velit, numquam officia neque
              nihil sit illum quam impedit, quibusdam rerum maiores est
              dignissimos autem. Excepturi, nisi distinctio? Necessitatibus
              repellendus sapiente impedit maiores provident assumenda cum ut
              voluptas? Nihil modi at similique. Corrupti, nostrum nesciunt
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              labore expedita. Maiores inventore impedit et vel quidem ducimus
              laborum, tenetur in, eos, iste iure dolorum officia? Velit
              voluptatibus commodi at. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolorum, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, accusamus aliquid. Saepe adipisci modi reprehenderit necessitatibus reiciendis deserunt ratione magnam vero voluptatum. Molestias commodi quaerat quisquam repudiandae hic, recusandae deleniti.
            </p>
            <button className="all-btn btn btn-success text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
