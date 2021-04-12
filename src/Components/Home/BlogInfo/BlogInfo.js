import React from "react";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
const BlogInfo = ({info}) => {
  return (
    <div className="col-lg-4">
      <div className="blog-inner shadow">
        <Link to="/blog">
          <figure className="blog-inner-head d-flex align-items-center">
            <div className="blog-img">
              <img className="img-fluid" src={info.image} alt="" />
            </div>
            <figcaption className="blog-content">
              <h6>{info.name}</h6>
              <p>{info.date}</p>
            </figcaption>
          </figure>
          <h5>{info.title}</h5>
          <p className="description">{info.description}</p>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </Link>
      </div>
    </div>
  );
};

export default BlogInfo;
