import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
};

export default Header;
