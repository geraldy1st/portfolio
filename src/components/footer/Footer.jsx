import React from "react";
import { FaGithub, FaCodepen, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { TbFlower } from "react-icons/tb";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/geraldy-leondas-35265279/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/code.init">
          <FaInstagram />
        </a>
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
        <small>
          &copy; Geraldy Leondas, All rights reserved {new Date().getFullYear()}
          .
        </small>
      </div>
    </footer>
  );
};

export default Footer;
