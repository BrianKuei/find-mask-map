import styled from 'styled-components';

import screenSize from '../../screen';

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media only screen and ${screenSize.mobileL} {
    width: 60%;
  }
`;

export const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const LogoName = styled.h1`
  color: #34495E;
  font-size: 1.25rem;
`;
