import React from 'react';
import { Nav, Logo } from './styles';
import logo from '../../images/logo.svg';

export const Navbar = () => (
  <Nav>
    <Logo src={logo}></Logo>
  </Nav>
);
