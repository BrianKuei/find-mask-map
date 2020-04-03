import React, { useState } from 'react';

import {
  NavBarContainer, NavBarUl, NavBarLi, NavBarItem,
} from './navbar.styles';

const Navbar = () => {
  const [active, setActive] = useState({
    maskStatus: false,
    howToBuy: false,
  });
  const addActiveClassHandler = (e) => {
    const { item } = e.target.dataset;

    return !active[item] ? setActive({ [item]: !active[item] }) : null;
  };

  return (
    <NavBarContainer>
      <NavBarUl>
        <NavBarLi>
          <NavBarItem
            className={active.maskStatus ? 'active' : ''}
            onClick={addActiveClassHandler}
            data-item="maskStatus"
          >
            口罩供給現況

          </NavBarItem>
        </NavBarLi>
        <NavBarLi>
          <NavBarItem
            className={active.howToBuy ? 'active' : ''}
            onClick={addActiveClassHandler}
            data-item="howToBuy"
          >
            口罩怎麼買

          </NavBarItem>
        </NavBarLi>
      </NavBarUl>
    </NavBarContainer>
  );
};

export default Navbar;
