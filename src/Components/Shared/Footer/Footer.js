import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Footer = () => {
  const footerLink = [
    {
      title: null,
      Link1: "emergency Dental Care",
      linkPath1: "/emergency Dental Care",
      Link2: "check Up",
      linkPath2: "/check Upe",
      Link3: "Treatment of Personal Diseases",
      linkPath3: "/Treatment of Personal Diseases",
      Link4: "Tooth Extraction",
      linkPath4: "/Tooth Extraction",
      Link5: "Check Up",
      linkPath5: "/Check Up",
      Link6: "",
      linkPath6: "",
      Link7: "",
      linkPath7: "",
      Link8: "",
      linkPath8: "",
      fbIcon: "",
      twiterIcon: "",
      linkdinIcon: "",
    },
    {
      title: "Services",
      Link1: "emergency Dental Care",
      linkPath1: "/emergency Dental Care",
      Link2: "check Up",
      linkPath2: "/check Upe",
      Link3: "Treatment of Personal Diseases",
      linkPath3: "/Treatment of Personal Diseases",
      Link4: "Tooth Extraction",
      linkPath4: "/Tooth Extraction",
      Link5: "Check Up",
      linkPath5: "/Check Up",
      Link6: "Check Up",
      linkPath6: "/Check Up",
      Link7: "Check Up",
      linkPath7: "/Check Up",
      Link8: "Check Up",
      linkPath8: "/Check Up",
      fbIcon: "",
      twiterIcon: "",
      linkdinIcon: "",
    },
    {
      title: "Oral Health",
      Link1: "emergency Dental Care",
      linkPath1: "/emergency Dental Care",
      Link2: "check Up",
      linkPath2: "/check Upe",
      Link3: "Treatment of Personal Diseases",
      linkPath3: "/Treatment of Personal Diseases",
      Link4: "Tooth Extraction",
      linkPath4: "/Tooth Extraction",
      Link5: "Check Up",
      linkPath5: "/Check Up",
      Link6: "Check Up",
      linkPath6: "/Check Up",
      Link7: "Check Up",
      linkPath7: "/Check Up",
      Link8: "",
      linkPath8: "",
      fbIcon: "",
      twiterIcon: "",
      linkdinIcon: "",
    },
    {
      title: "Our address",
      address: "New York - 101100 Hudson Yards",
      fbLink: "https://www.facebook.com/",
      twiterLink: "https://twitter.com/",
      linkdinLink: "https://bd.linkedin.com/",
      fbIcon: faPhoneAlt,
      twiterIcon: faPhoneAlt,
      linkdinIcon: faPhoneAlt,
      contact: "Call Now",
      phone: +225550295,
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="row">
          {footerLink.map((link,index) => (
            <div className="col-lg-3" key={link.index}>
              <h4 className="sub-title-head">{link.title}</h4>
              <div className="footer-link">
                <Link className="d-block" to="/">
                  {link.Link1}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link2}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link3}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link4}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link5}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link6}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link7}
                </Link>
                <Link className="d-block" to="/">
                  {link.Link8}
                </Link>
              </div>

              <div className="footer-right-side">
                <p>{link.address}</p>
                <div className="social-icon">
                  <Link to="/">
                    facebook
                  </Link>
                </div>
                <div className="right-side-bottom">
                  <p>{link.contact}</p>
                  <h6 className="phone-number">{link.phone}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
