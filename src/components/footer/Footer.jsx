import React from "react";
import { FiInstagram } from "react-icons/fi";
// import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        CodeInit
      </a>

      <ul className="permalinks">
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
      </ul>

      <div className="footer__socials">
        <a href="https://codepen.com/geraldy1st">
          <FaCodepen />
        </a>
        <a href="https://github.com/geraldy1st">
          <FaGithub />
        </a>
        <a href="https://instagram.com/code.init">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Geraldy Leondas, All rights rights reserved 2022.</small>
      </div>
    </footer>
  );
};

export default Footer;
