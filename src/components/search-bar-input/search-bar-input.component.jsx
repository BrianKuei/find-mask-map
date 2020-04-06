import React from 'react';

import { SearchBarContainer, SearchBar, SetCurrentLocation } from './search-bar-input.styles';

import locationIcon from '../../assets/ic_location@2x.png';

const SearchBarInput = () => (
  <SearchBarContainer>
    <SearchBar type="text" placeholder="目前位置" />
    <SetCurrentLocation>
      <img src={locationIcon} alt="set location icon" />
    </SetCurrentLocation>
  </SearchBarContainer>
);

export default SearchBarInput;
