import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/geraldy-leondas-35265279/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/geraldy1st" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://codepen.com" target="_blank" rel="noreferrer">
        <FaCodepen />
      </a>
      <a
        href="https://instagram.com/code.init"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
