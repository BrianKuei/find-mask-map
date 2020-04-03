import React from 'react';

import HeaderContainer from './header.styles';
import Logo from '../logo/logo.component';
import NavBar from '../nav-bar/nav-bar.component';
import { NavToggle, NavToggleCheckbox } from '../nav-toggle/nav-toggle.component';


const Header = () => (
  <>
    <NavToggleCheckbox />
    <HeaderContainer>
      <Logo />
      <NavToggle />
      <NavBar />
    </HeaderContainer>
  </>
);

export default Header;
