import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Valeria Garcia
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/valgarcia_v/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/thatssovaleriaa">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/valeria-garciav/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/valgarciav">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Valeria Garcia. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
