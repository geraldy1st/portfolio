import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import emailjs from "emailjs-com";

import "./Contact.styles.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rz4exwh",
        "template_4vo61ur",
        form.current,
        "hvkOD8G5fSFa34HeD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            {/* <h5>codeinit.geraldy@gmail.com</h5> */}
            <a
              href="mailto:codeinit.geraldy@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Geraldy Code Init</h5>
            <a
              href="https://m.me/codeinitgeraldy"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article> */}

          <article className="contact__option">
            <FiInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>code.init</h5>
            {/* <a
              href="https://api.whatsapp.com/send?phone=+555"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a> */}
            <a
              href="https://instagram.com/code.init"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
