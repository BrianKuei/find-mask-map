import styled from 'styled-components';

import screenSize from '../../screen';

export const Button = styled.button`
  background: #34495E;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
  width: 30%;

  @media only screen and ${screenSize.mobileL} {
    display: none;
  }
`;
