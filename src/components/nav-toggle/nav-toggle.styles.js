import styled from 'styled-components';

import screenSize from '../../screen';

import toggleBurgerImage from '../../assets/ic_toggler@2x.png';
import toggleCloseImage from '../../assets/ic_close@2x.png';

export const ToggleImage = styled.label`
  display: none;
  cursor: pointer;
  background: url("${(props) => (props.changeToggleImage ? toggleCloseImage : toggleBurgerImage)}")
  no-repeat;
  background-size: 25px;
  width: 26px;
  height: 24px;

  @media only screen and ${screenSize.mobileL} {
    display: block;
  }
`;

export const ToggleCheckbox = styled.input`
  display: none;

  @media only screen and ${screenSize.mobileL} {
    &:checked + header {
      height: 215px;
      background: #34495e;
    }
    &:checked + header > a > h1 {
      color: white;
    }
  }
`;
