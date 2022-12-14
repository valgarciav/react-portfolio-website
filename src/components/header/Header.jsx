import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Subject6.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4> Hello I'm</h4>
        <h1>Valeria Garcia</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
