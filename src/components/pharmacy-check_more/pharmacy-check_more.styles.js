import styled from 'styled-components';

import screenSize from '../../screen';

export const CheckMoreContainer = styled.div`
  width: 343px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RemainPharmacies = styled.p`
  font-size: 12px;
  color: #34495E;
`;

export const CheckMoreButton = styled.button`
  background: #34495E;
  border: none;
  width: 152px;
  height: 46px;
  border-radius: 23px;
  color: #fff;
  margin-top: 12px;
  cursor: pointer;
`;

export const GoTop = styled.button`
  background: #34495E;
  border: none;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 30px;

  @media only screen and ${screenSize.mobileL} {
    ${({ currentContainerTop }) => (currentContainerTop < 150 ? 'display:none' : '')}
    position: fixed;
    bottom: calc(115px + 1.75rem);
  }
`;
