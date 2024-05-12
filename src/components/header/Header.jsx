import React from "react";
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
        <HeaderSocials />
        <div className="me">
          <img src={softwareImg} alt="working testers" />
        </div>
      </div>
    </header>
  );
};

export default Header;
