import React from "react";
import "./Services.styles.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>QA Tester</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Test case</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Perfomance testing</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Regression test</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Test fonctional</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Consultant Logiciel</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Analysis</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Interface architecture</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Sketching & Wireframes</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Dynamic prototype</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Editing and coding</p>
            </li>
          </ul>
        </article>

        {/* End of Testing */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Information Gathering</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Code review</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Content Writing and Assembly</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Coding</p>
            </li>
            <li>
              <BiCheck className="service__lis-icon" />
              <p>Maintenance</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
