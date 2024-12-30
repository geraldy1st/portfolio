import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { TbFlower } from "react-icons/tb";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer>
      {/* <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
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
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul> */}

      <div className="footer__socials">
        <a href="https://codepen.com/geraldy1st">
          <FaCodepen />
        </a>
        <a href="https://github.com/geraldy1st">
          <FaGithub />
        </a>
        <a href="https://www.fiverr.com/geraldy1st">
          <SiFiverr />
        </a>
        <a href="https://www.upwork.com/freelancers/~0181b4e7e5b18fce54">
          <SiUpwork />
        </a>
        <a href="https://www.malt.fr/profile/geraldyleondas">
          <TbFlower />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Geraldy Leondas, All rights rights reserved 2022.</small>
      </div>
    </footer>
  );
};

export default Footer;
