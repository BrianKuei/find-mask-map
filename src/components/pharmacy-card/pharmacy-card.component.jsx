import React from 'react';

import PharmacyMaskQuantity from '../pharmacy-mask_quantity/pharmacy-mask_quantity.component';
import PharmacyName from '../pharmacy-name/pharmacy-name.component';
import PharmacyInfo from '../pharmacy-info/pharmacy-info.component';

import { PharmacyCardContainer, AdultAndKidMaskQuantity } from './pharmacy-card.styles';


const PharmacyCard = () => (
  <PharmacyCardContainer>
    <AdultAndKidMaskQuantity>
      <PharmacyMaskQuantity title="成人口罩數量" quantity={200} />
      <PharmacyMaskQuantity title="兒童口罩數量" quantity={4} />
    </AdultAndKidMaskQuantity>
    <PharmacyName />
    <PharmacyInfo />
  </PharmacyCardContainer>
);

export default PharmacyCard;
