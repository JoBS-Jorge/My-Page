import "./portfolio.css";

import IMG1 from "../../assets/QuizBuzzFeed.png";
import IMG2 from "../../assets/simulacaoPSN.png";
import IMG3 from "../../assets/Gitfind.png";
import IMG4 from "../../assets/Github-wiki.png";
import IMG5 from "../../assets/CalculadoraReact.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Quiz Buzzfeed - Angular",
      img: IMG1,
      description:
        "Quiz do buzzfeed utilizando framework angular para praticar a estrutura de componentes.",
      technologies: "Angular | Component | CSS",
      link: "https://jobs-jorge.github.io/angular-buzzfeed-quizz/",
    },
    {
      id: 2,
      title: "Simulação da PSN",
      img: IMG2,
      description:
        "Simulação da PSN store utilizando framework Angular e componentes.",
      technologies: "Angular | Component | CSS",
      link: "https://jobs-jorge.github.io/psn-store/",
    },
    {
      id: 3,
      title: "Gitfind - com API",
      img: IMG3,
      description:
        "Projeto de aplicação GitFind utilizando a biblioteca React. Projeto que utiliza a API do GitHub para consultar repositório de usuário pesquisado.",
      technologies: "React | Hooks | API | Styled-Component",
      link: "https://jobs-jorge.github.io/gitfind/",
    },
    {
      id: 4,
      title: "Github Wiki - com API",
      img: IMG4,
      description:
        "Acessando repositórios do Github através da API do Github utilizando React.",
      technologies: "React | Hooks | API | Styled-Component",
      link: "https://jobs-jorge.github.io/github-wiki/",
    },
    {
      id: 5,
      title: "Calculadora - React",
      img: IMG5,
      description:
        "Projeto de calculadora digital, utilizando React, para praticar a utilização de funções, estrutura HTML, estilização com CSS e componentes.",
      technologies: "React | Hooks | CSS",
      link: "https://jobs-jorge.github.io/calculadora-react/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
