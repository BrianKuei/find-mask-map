import React, { useState, useEffect, useRef } from 'react';

import SearchBarInput from '../search-bar-input/search-bar-input.component';
import SearchBarButton from '../search-bar-button/search-bar-button.component';
import ParityDays from '../parity-days/parity-days.component';
import UpdateAndReforming from '../update-and-reforming/update-and-reforming.component';
import PharmacyCard from '../pharmacy-card/pharmacy-card.component';
import PharmacyCheckMore from '../pharmacy-check_more/pharmacy-check_more.component';

import {
  SideBarContainer,
  SearchAndParityDaysContainer,
  TextAndButtonContainer,
  ShowPharmaciesInfoContainer,
} from './sidebar.styled';


const SideBar = () => {
  const [showPharmaciesContainerTop, setShowPharmaciesContainerTop] = useState(0);
  const pharmaciesContainerRef = useRef(null);
  const goTopFunc = () => {
    pharmaciesContainerRef.current.scrollTop = 0;
  };

  useEffect(() => {
    setShowPharmaciesContainerTop(pharmaciesContainerRef.current.scrollTop);
  }, []);

  return (
    <SideBarContainer>
      <SearchAndParityDaysContainer>
        <TextAndButtonContainer>
          <SearchBarInput />
          <SearchBarButton />
        </TextAndButtonContainer>
        <ParityDays />
        <UpdateAndReforming />
      </SearchAndParityDaysContainer>
      <ShowPharmaciesInfoContainer
        onScroll={() => {
          setShowPharmaciesContainerTop(pharmaciesContainerRef.current.scrollTop);
        }}
        ref={pharmaciesContainerRef}
      >
        <PharmacyCard />
        <PharmacyCard />
        <PharmacyCard />
        <PharmacyCard />
        <PharmacyCard />
        <PharmacyCard />
        <PharmacyCheckMore
          goTopFunc={goTopFunc}
          currentContainerTop={showPharmaciesContainerTop}
        />
      </ShowPharmaciesInfoContainer>
    </SideBarContainer>
  );
};

export default SideBar;
