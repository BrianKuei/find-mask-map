import styled from 'styled-components';

import screenSize from '../../screen';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10px 10px 0;

  @media only screen and ${screenSize.mobileL} {
    display: flex;
    justify-content: flex-start;
    background: #34495E;
    padding: 32px 0 30px 24px;
  }
`;


export const FooterContent = styled.div`
  line-height: 25px;
  .info {
    color: #34495E;
    font-weight: bold;
  }
  .naming {
    color: #DFE3E6;
    text-align: right;
  }

  @media only screen and ${screenSize.mobileL} {
    display: flex;
    flex-direction: column;

    .info {
      color: #ffff;
      font-weight: bold;
    }

    .naming {
      color: #566778;
      text-align: left;
    }

  }
`;
