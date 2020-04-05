import React from 'react';

import ParityDaysContainer from './parity-days.styles';

import helpIcon from '../../assets/ic_help@2x.png';

const ParityDays = () => (
  <ParityDaysContainer>
    <h2>偶數</h2>
    <p>購買日</p>
    <span>
      <img src={helpIcon} alt="help icon" />
    </span>
  </ParityDaysContainer>
);

export default ParityDays;
