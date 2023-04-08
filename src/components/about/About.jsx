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
          <h3>Profil:</h3>
          <p>
            I'm Geraldy, a Consultant Quality Assurance Analyst in software
            development. With more than 5 years of experience in the tech
            industry, I've honed my skills in both software development and
            quality assurance.
          </p>
          <p>
            As a former Full-Stack Developer with expertise in Ruby and Rails &
            React. I've gained expertise in creating and executing comprehensive
            test plans, conducting thorough code reviews, and identifying and
            resolving defects to ensure optimal performance and user
            satisfaction.
          </p>
          <p>
            My dedication to delivering high-quality products has earned me a
            reputation for meticulous attention to detail and a proactive
            approach to problem-solving. Graduated from{" "}
            <a
              href="https://www.groupefitec.fr/"
              target="_blank"
              rel="noreferrer"
              className="redirectedLink1"
            >
              FITEC
            </a>{" "}
            and with previous experience at THP -
            <a
              href="https://www.thehackingproject.org"
              target="_blank"
              rel="noreferrer"
              className="redirectedLink1"
            >
              The Hacking Project
            </a>{" "}
            - in Paris. I'm dedicated to helping organizations achieve their
            quality goals and driving excellence in software development.
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
