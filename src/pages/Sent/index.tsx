import React from 'react';

import { Container } from './styles';

const Sent: React.FC = () => {
  return (
    <Container className="container">
      <h1>Estamos analisando suas respostas</h1>
      <p>
        As suas respostas foram enviadas para o nosso servidor e estão sendo
        processadas
      </p>
      <p>
        Dentro de 5 minutos enviaremos para o email cadastrado no formulário
      </p>
    </Container>
  );
};

export default Sent;
