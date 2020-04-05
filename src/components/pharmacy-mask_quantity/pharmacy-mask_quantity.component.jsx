import React from 'react';
import PropTypes from 'prop-types';

import MaskQuantityContainer from './pharmacy-mask_quantity.styles';

const PharmacyMaskQuantity = ({ title, quantity }) => (
  <MaskQuantityContainer quantity={quantity}>
    <h5>{title}</h5>
    <h3>
      {quantity}
      {' '}
      <span>片</span>
    </h3>
  </MaskQuantityContainer>
);

PharmacyMaskQuantity.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default PharmacyMaskQuantity;
