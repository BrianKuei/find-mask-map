import styled from 'styled-components';

import screenSize from '../../screen';


export const MapContainer = styled.div`
  width: 100%;
  height: 90%;
  padding: 0 10px 10px 10px;

  @media only screen and ${screenSize.mobileL} {
    display: none;
  }
`;


export const OSMMap = styled.div`
  width: 100%;
  height: 100%;
`;
