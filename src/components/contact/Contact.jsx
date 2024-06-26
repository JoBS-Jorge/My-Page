import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Entre em contato</h5>
      <h5>
        Vou adorar receber seu contato para falar de novos projetos :)
      </h5>
      <h2>Contatos</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>jorge.not@gmail.com</h5>
              <h5>Brasília, Distrito Federal</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
