import styled from 'styled-components';

import screenSize from '../../screen';

export const SearchBarContainer = styled.div`
  width: 70%;
  position: relative;

  @media only screen and ${screenSize} {
    width: 100%;
  }
`;

export const SearchBar = styled.input.attrs({ placeholderText: '目前位置' })`
  border: 1px solid #34495E33;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 16px;
  width: 100%;
  height: 46px;

  &:hover {
    border-color: #34495E;
  }

  @media only screen and ${screenSize.mobileL} {
    width: 100%;
  }
`;

export const SetCurrentLocation = styled.button`
  display: none;
  @media only screen and ${screenSize.mobileL} {
    display: block;
    width: 40px;
    height: 40px;
    padding: 5px;
    background: none;
    border: none;
    position: absolute;
    right: 12px;
    top: 3px;

    &:hover {
      border-radius: 50%;
      background: rgb(0,0,0,0.04);
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;
