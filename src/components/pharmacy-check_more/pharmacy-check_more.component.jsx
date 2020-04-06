import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckMoreContainer, RemainPharmacies, CheckMoreButton, GoTop,
} from './pharmacy-check_more.styles';

const PharmacyCheckMore = ({ goTopFunc, currentContainerTop }) => (
  <CheckMoreContainer>
    <RemainPharmacies>尚有 20 筆</RemainPharmacies>
    <CheckMoreButton>查看更多</CheckMoreButton>
    <GoTop onClick={goTopFunc} currentContainerTop={currentContainerTop}>
      TOP
    </GoTop>
  </CheckMoreContainer>
);

PharmacyCheckMore.propTypes = {
  goTopFunc: PropTypes.func.isRequired,
  currentContainerTop: PropTypes.number.isRequired,
};

export default PharmacyCheckMore;
