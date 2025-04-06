import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
