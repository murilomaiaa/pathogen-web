import React, { useState } from 'react';

import { Container, Radio } from './styles';

interface Question {
  title: string;
  isBinary?: boolean;
  numberOfLevels?: number;
}

const QuestionBox: React.FC<Question> = ({
  title,
  isBinary = true,
  numberOfLevels = 1,
}) => {
  const [selectedButton, setSelectedButton] = useState('');

  return (
    <Container>
      <h1>{title}</h1>
      <div className="row">
        <div className="col-md-6">
          <Radio
            type="button"
            name="trueButton"
            id="trueButton"
            onClick={() => {
              setSelectedButton('trueButton');
            }}
            selected={
              document.querySelector('#trueButton')?.getAttribute('id') ===
              selectedButton
            }
          >
            Sim
          </Radio>
        </div>
        <div className="col-md-6">
          <Radio
            type="button"
            name="falseButton"
            id="falseButton"
            onClick={() => {
              setSelectedButton('falseButton');
            }}
            selected={
              document.querySelector('#falseButton')?.getAttribute('id') ===
              selectedButton
            }
          >
            Não
          </Radio>
        </div>
      </div>
    </Container>
  );
};

export default QuestionBox;
