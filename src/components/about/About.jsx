import React from "react";
import "./About.styles.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me">
            <img src={Me} alt="me" className="about__me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expierence</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>
          <br />
          <br />
          <h3>Front End web developer</h3>
          <p>
            I’m a french front end developer, currently working as a freelancer.
            I graduated from CIFAP and I’m a former developer at THP{" "}
            <a
              href="https://www.thehackingproject.org"
              target="_blank"
              rel="noreferrer"
              className="redirectedLink1"
            >
              (The Hacking Project)
            </a>
            , a digital coding bootcamps located in Paris. I dedicate my time to
            develop webapp and create useful services mostly built with React.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
