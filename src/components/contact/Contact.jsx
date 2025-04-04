import React, { useRef } from "react";
import "./Contact.styles.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinBoxLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:geraldy.leondas@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiLinkedinBoxLine className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/geraldy-leondas-35265279/"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <a
              href="https://instagram.com/code.init"
              target="_blank"
              rel="noreferrer"
            >
              Follow me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form__group">
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
