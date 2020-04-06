import styled from 'styled-components';

import screenSize from '../../screen';

export const NavBarContainer = styled.nav`
  @media only screen and ${screenSize.mobileL} {
    width: 120%;
    margin: 10px -23px;
    padding: 16px 0;

    .active {
      border-bottom: none;
      background: #495B6D;
    }
  }
`;

export const NavBarUl = styled.ul`
  display: flex;

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
    flex-direction: column;
  }
`;

export const NavBarLi = styled.li`
  width: 150px;
  display: flex;
  justify-content: flex-end;

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
    margin: 0;
    height: 56px;
  }
`;

export const NavBarItem = styled.a`
  color: #34495e;
  font-size: 1.25rem;
  text-decoration: none;
  line-height: 35px;
  display: flex;
  justify-content: center;
  width: 82%;
  position: relative;
  cursor: pointer;

  ${(props) => (props.active ? `&::after{
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    display: block;
    background-color: #34495e;
    height: 4px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }` : '')}
  

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
