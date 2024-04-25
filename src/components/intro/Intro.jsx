import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Jorge.webp";

const Intro = () => {
  return (
    <section id="about">
      <h5>saiba mais</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>2+ anos</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>32+ Completed Projects</small>
            </article>
          </div>
          <p>
            Desenvolvedor Front-End formado em Tecnologia em Segurança da Informação, focado em JavaScript, TypeScript, Angular e React, com habilidades para trabalhar em equipe, versionamento através do Git e GitHu. Com bom conhecimento na utilização de API, manipulação de DOM, CSS e HTML. Busco sempre refatorar os códigos dos projetos desenvolvidos com o objetivo de tornar o código mais limpo e simples, sempre mantendo organizado e comentado para fácil manutenção.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
