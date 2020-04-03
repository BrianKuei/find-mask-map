import styled from 'styled-components';

import screenSize from '../../screen';

export const SideBarContainer = styled.div`
  width: 30%;
  height: 100%;

  background: #FAFAFA;

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
  }
`;
