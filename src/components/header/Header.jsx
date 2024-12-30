import React from "react";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

import "./Header.styles.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h1>Geraldy LEONDAS</h1>
        <h5 className="text-light">Senior Quality Assurance Engineer</h5>
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="working testers" />
        </div>
        <div className="cta">
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn">
            View My Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
