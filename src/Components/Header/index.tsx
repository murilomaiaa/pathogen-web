import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </Container>
  );
};

export default Header;
