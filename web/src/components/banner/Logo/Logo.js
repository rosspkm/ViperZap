import React , { Component } from 'react';
import { Slogan , LogoContainer } from './styles';

class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <h1>ViperZAP</h1>
        <Slogan>A Javscript Interpreted Programming Language</Slogan>
      </LogoContainer>
    );
  };
};

export default Logo;