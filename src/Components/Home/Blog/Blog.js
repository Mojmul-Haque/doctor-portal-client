import React from "react";
import patient1 from "../../../images/Ellipse 1.png";
import patient2 from "../../../images/Ellipse 2.png";
import patient3 from "../../../images/Ellipse 3.png";
import BlogInfo from "../BlogInfo/BlogInfo";
import "./Blog.css";
const Blog = () => {
  const blogInfo = [
    {
      name: "Al-Amin",
      title: "2 tiimes  brush in a day can keep you healthy",
      date: "23 April,2019",
      image: patient1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum, ut repellat temporibus illum ",
    },
    {
      name: "Istia Sultana",
      title: "2 tiimes  brush in a day can keep you healthy",
      date: "23 April,2019",
      image: patient2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum, ut repellat temporibus illum ",
    },
    {
      name: "Meftahul Jannat",
      title: "2 tiimes  brush in a day can keep you healthy",
      date: "23 April,2019",
      image: patient3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum, ut repellat temporibus illum ",
    },
  ];
  return (
    <section className="blog-part">
      <div className="container">
        <div className="row blog-head">
          <h4 className="section-sub-title text-center"> Our Blog</h4>
          <h3 className="section-title text-center">From Our Blog News</h3>
        </div>
        <div className="row">
          {blogInfo.map((info) => (
            <BlogInfo info={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
