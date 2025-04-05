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
        <div className="me">
          <img src={Me} alt="Geraldy" />
        </div>
        <p>
          Empowering teams through Quality Assurance expertise and Scrum
          practices to deliver exceptional software solutions
        </p>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
