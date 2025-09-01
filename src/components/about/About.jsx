import React from "react";
import "./About.styles.css";
import { BsShieldCheck } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiTargetLock className="about__icon" />
              <h5>Precision Testing</h5>
              <small>Meticulous attention to detail in every test case</small>
            </article>

            <article className="about__card">
              <BsShieldCheck className="about__icon" />
              <h5>Quality Assurance</h5>
              <small>Ensuring robust and reliable software delivery</small>
            </article>

            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Automation</h5>
              <small>
                Expert in creating efficient test automation frameworks
              </small>
            </article>
          </div>

          <p>
            I deliver high-quality products using manual testing and automation,
            I have earned my skills from attention to detail and a proactive
            approach to problem-solving. Graduated from{" "}
            <a
              href="https://fr.linkedin.com/company/groupe-fitec"
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
        </div>
      </div>
    </section>
  );
};

export default About;
