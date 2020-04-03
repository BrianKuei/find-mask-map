import React from 'react';

import SideBar from '../../components/sidebar/sidebar.component';
import Map from '../../components/map/map.component';

import MainPageContainer from './main-page.styles';

const MainPage = () => (
  <MainPageContainer>
    <SideBar />
    <Map />
  </MainPageContainer>
);

export default MainPage;
