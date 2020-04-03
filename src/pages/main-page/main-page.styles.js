import styled from 'styled-components';

import screenSize from '../../screen';

export const MainPageContainer = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - 65px);
  padding: 0 1%;

  @media only screen and ${screenSize.mobileL} {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const MapAndFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
  }
`;
