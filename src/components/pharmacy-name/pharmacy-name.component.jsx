import React from 'react';

import {
  PharmacyNameContainer, PharmacyTitle, PharmacyDistance, OpeningOrNot,
} from './pharmacy-name.styles';

const PharmacyName = () => (
  <PharmacyNameContainer>
    <PharmacyTitle>
      優德仕藥局
    </PharmacyTitle>
    <PharmacyDistance>
      1.2 km
    </PharmacyDistance>
    <OpeningOrNot>
      <p>
        營業中
      </p>
    </OpeningOrNot>
  </PharmacyNameContainer>
);

export default PharmacyName;
