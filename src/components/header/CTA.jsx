import React from 'react';
import CV from '../../assets/CurricJorgeBraz04_2024.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contato
      </a>
    </div>
  );
};

export default CTA;
