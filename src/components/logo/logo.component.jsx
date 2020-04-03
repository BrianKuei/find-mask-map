import React from 'react';

import logoImage from '../../assets/logo.png';
import { LogoContainer, LogoImage, LogoName } from './logo.styles';

const Logo = () => (
  <LogoContainer href="#">
    <LogoImage src={logoImage} alt="Logo Icon" />
    <LogoName>口罩即時查</LogoName>
  </LogoContainer>
);

export default Logo;
