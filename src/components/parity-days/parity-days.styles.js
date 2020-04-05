import styled from 'styled-components';


import screenSize from '../../screen';

const ParityDaysContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0 25px 0;

  h2 {
    color: #34495E;
    font-size: 36px;
    font-weight: bold;
  }

  p {
    color: #34495E;
    font-size: 16px;
    line-height: 20px;
    margin: 0 8px;
  }

  span {
    width: 20px;
    height: 20px;
    cursor: pointer;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  
  @media only screen and ${screenSize.mobileL} {

  }
`;

export default ParityDaysContainer;
