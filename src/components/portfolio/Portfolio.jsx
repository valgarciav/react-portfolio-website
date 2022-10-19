import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/musicSearch.png";
import IMG2 from "../../assets/webGameJS.png";
import IMG3 from "../../assets/wisperApp.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Music Search App",
    github: "https://github.com/valgarciav/RR-Music-Search",
    demo: "https://main.dyqm2lf1uonfr.amplifyapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "JS Web Game",
    github: "https://github.com/valgarciav/JS-Web-Game-Part-7",
    demo: "https://main.d2hhm31zgqii90.amplifyapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Wisper Social",
    github: "https://github.com/AnthonyConnell/wisper-frontend",
    demo: "https://wisper-1.herokuapp.com/",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Date Night App",
  //   github: "https://github.com/sammygallo/event-suggester.git",
  //   demo: "https://sammy.d11vq1zd8d4ob2.amplifyapp.com/#",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "",
  //   github: "https:github.com",
  //   demo: "",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "",
  //   github: "https:github.com",
  //   demo: "",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href="{github}" className="btn">
                  Github{" "}
                </a>
                <a href={demo} className="btn btn-primary" targer="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
