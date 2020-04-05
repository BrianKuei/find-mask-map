import styled from 'styled-components';


export const PharmacyNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &::before {
    content:"";
    position: absolute;
    left: 0;
    width: 4px;
    height: 24px;
    border-radius: 0 4px 4px 0;
    background: #11787A;
  }
`;


export const PharmacyTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #34495E;
`;

export const PharmacyDistance = styled.span`
  font-size: 11px;
  color: #566778;
  font-weight: bold;
  margin: 0 12px -5px 4px;
`;

export const OpeningOrNot = styled.div`
  background-color: #E2F0EE;
  border-radius: 6px;
  padding: 3px 6px 3px 6px;
  width: 48px;
  height: 24px;

  p {
    color: #16A085;
    font-size: 12px;
    line-height: 17px;
  }
`;
