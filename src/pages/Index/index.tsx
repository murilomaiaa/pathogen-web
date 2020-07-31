import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import Header from '../../Components/Header';

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div id="welcome">
          <h1>Bem vindo ao Pathogen!</h1>
          <h2>Plataforma desenvolvida para ajudar no combate ao Covid</h2>
        </div>
        <div id="text">
          <p>
            Se você foi diagnosticado com covid ou apresenta algum sintoma,
            responda a essas perguntas e daremos dicas para o auxiliar no
            tratamento dos sintomas ou informaremos a unidade de saude mais
            próxima
          </p>
        </div>
        <div id="btn">
          <Link to="form">
            <button type="button">Participar da triagem</button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Index;
