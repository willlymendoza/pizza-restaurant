import React from "react";
import "./styles.scss";
import SectionTitle from "components/SectionTitle";

const Contact = () => {
  return (
    <section className="contact section">
      <SectionTitle text="get in touch" />

      <h3>Feel free and send us a message.</h3>

      <div className="contact-form">
        <div className="contact-form-item col-2">
          <input type="text" placeholder="Name" />
        </div>
        <div className="contact-form-item col-2">
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="contact-form-item">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="contact-form-item">
          <textarea placeholder="Message" data-gramm_editor="false"></textarea>
        </div>

        <div className="contact-form-button">
          <button className="btn">send message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
