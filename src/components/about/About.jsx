import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
//import { FiUsers } from "react-icons/fi";
//import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Fundamentals of Digital Marketing, Google</h5>
              <small>2022</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>North Carolina Certified Nurse Assistant</h5>
              <small>2021</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Registered Yoga Teacher</h5>
              <small>2020</small>
            </article>
          </div>

          <p>
            NCSU Software engineer student graduating in October of 2022.
            Education background is in healthcare and work experience in the
            banking industry, both consisting of teamwork-oriented environments
            with high demand for attention to detail and problem solving.
            Decided to change direction and found a passion in the world of
            software development. Creative problem solving is what gets me out
            of bed in the morning.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
