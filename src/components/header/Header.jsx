import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Olá! Eu sou</h5>
        <h1>Jorge Braz</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
