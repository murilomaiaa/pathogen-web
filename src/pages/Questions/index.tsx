import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import QuestionBox from '../../Components/QuestionBox';

import { Container, Button } from './styles';

const Questions: React.FC = () => {
  const questions = [
    { title: 'Você apresentou dor de cabeça?', numberOfLevels: 3 },
    { title: 'Você apresentou febre?' },
    { title: 'Você apresentou tosse?' },
    { title: 'Você apresentou falta de ar' },
    { title: 'Você apresentou fadiga' },
    { title: 'Você apresentou dor de garganta' },
    { title: 'Você apresentou dor no corpo' },
  ];

  return (
    <>
      <Header />
      <Container className="container">
        {questions.map(question => (
          <QuestionBox title={question.title} />
        ))}
        <Link to="/enviado">
          <Button type="button" className="btn btn-success">
            Confirmar envio
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Questions;
