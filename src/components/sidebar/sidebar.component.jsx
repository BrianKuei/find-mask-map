import React from 'react';

import { SideBarContainer, SearchAndParityDaysContainer, ShowPharmaciesInfoContainer } from './sidebar.styled';

const SideBar = () => (
  <SideBarContainer>
    <SearchAndParityDaysContainer />
    <ShowPharmaciesInfoContainer />
  </SideBarContainer>
);

export default SideBar;
