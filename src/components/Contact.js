import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
const Contact = () => {
  return (
    <section id="contact" class="contact-section">
      <h2>Let's work together...</h2>
      <div class="contact-links">
        <a
          href="https://www.linkedin.com/in/kncalderong/"
          target="_blank"
          class="btn contact-details"
          rel="noreferrer"
        >
          <GrLinkedin size={40} />
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/kncalderong"
          target="_blank"
          class="btn contact-details"
          id="profile-link"
          rel="noreferrer"
        >
          <BsGithub size={40} />
          <p>GitHub</p>
        </a>
        <a
          href="mailto:kncalderong@gmail.com"
          class="btn contact-details"
          target="_blank"
          rel="noreferrer"
        >
          <AiTwotoneMail size={40} />
          <p>Email</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
