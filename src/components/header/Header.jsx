import React from "react";
import Cta from "./Cta";
import softwareImg from "../../assets/How-to-Improve-Your-Software-With-Customer-Feedback-banner.png";
import HeaderSocials from "./HeaderSocials";

import "./Header.styles.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h1>Geraldy LEONDAS</h1>
        <h5 className="text-light">
          Quality Assurance Engineer | Web Developer
        </h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={softwareImg} alt="working testers" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
