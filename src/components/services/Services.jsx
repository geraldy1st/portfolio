import React from "react";
import "./Services.styles.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h2>Professional Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Quality Assurance</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>End-to-End Test Strategy Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Automated Test Framework Implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance & Load Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Regression Testing & Test Suite Maintenance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CI/CD Pipeline Integration</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software Consulting</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Quality Assurance Strategy</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Test Process Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Agile Testing Implementation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Test Automation Architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Quality Metrics & Reporting</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Technical Leadership</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>QA Team Leadership & Mentoring</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Review & Best Practices</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Test Documentation Standards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-functional Team Collaboration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Quality Process Implementation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
