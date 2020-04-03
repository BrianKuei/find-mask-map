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


export const SearchAndParityDaysContainer = styled.div`
  width: 100%;
  height: 200px;

  background: green;
`;

export const ShowPharmaciesInfoContainer = styled.div`
  width: 100%;
  height: calc(100% - 200px);

  background: yellow;
`;
