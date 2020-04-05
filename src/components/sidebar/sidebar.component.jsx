import React from 'react';

import SearchBarInput from '../search-bar-input/search-bar-input.component';
import SearchBarButton from '../search-bar-button/search-bar-button.component';
import ParityDays from '../parity-days/parity-days.component';
import UpdateAndReforming from '../update-and-reforming/update-and-reforming.component';
import PharmacyCard from '../pharmacy-card/pharmacy-card.component';

import {
  SideBarContainer,
  SearchAndParityDaysContainer,
  TextAndButtonContainer,
  ShowPharmaciesInfoContainer,
} from './sidebar.styled';

const SideBar = () => (
  <SideBarContainer>
    <SearchAndParityDaysContainer>
      <TextAndButtonContainer>
        <SearchBarInput />
        <SearchBarButton />
      </TextAndButtonContainer>
      <ParityDays />
      <UpdateAndReforming />
    </SearchAndParityDaysContainer>
    <ShowPharmaciesInfoContainer>
      <PharmacyCard />
      <PharmacyCard />
      <PharmacyCard />
      <PharmacyCard />
      <PharmacyCard />
      <PharmacyCard />
    </ShowPharmaciesInfoContainer>
  </SideBarContainer>
);

export default SideBar;
