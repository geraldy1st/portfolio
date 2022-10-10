import React from "react";
import Cta from "./Cta";
import MyPhoto from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

import "./Header.styles.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h5>Hello I'm</h5>
        <h1>Geraldy LEONDAS</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={MyPhoto} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
