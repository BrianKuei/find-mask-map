import styled from 'styled-components';

import screenSize from '../../screen';

export const SideBarContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background: #FAFAFA;

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
    height: 85%;
  }
`;


export const SearchAndParityDaysContainer = styled.div`
  width: 100%;
  padding: 16px 16px 21px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

export const TextAndButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
`;

export const ShowPharmaciesInfoContainer = styled.div`
  width: 100%;
  overflow: scroll;
  padding: 0 16px;

  @media only screen and ${screenSize.mobileL} {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
