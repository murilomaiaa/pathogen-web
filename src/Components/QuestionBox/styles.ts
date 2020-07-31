import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 36px;
  h1 {
    font-size: 18px;
    font-style: normal;
  }
`;

interface RadioProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

export const Radio = styled.button<RadioProps>`
  background-color: transparent;
  color: #487eb0;
  border: 2px solid #487eb0;
  width: 100%;
  height: 50px;
  margin: 8px;

  ${props =>
    props.selected &&
    css`
      color: #fff;
      border-color: #487eb0;
      background-color: #487eb0;
    `}

  &:hover {
    background-color: #487eb0;
    color: #fff;
  }
`;
