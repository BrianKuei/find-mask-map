import styled from 'styled-components';

import screenSize from '../../screen';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1%;
  width: 100vw;
  height: 65px;
  overflow: hidden;

  @media only screen and ${screenSize.mobileL} {
    flex-wrap: wrap;
    padding: 20px 24px 0 16px;
    transition: 0.2s linear;
  }
`;


export default HeaderContainer;
