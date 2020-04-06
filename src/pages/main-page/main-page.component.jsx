import React from 'react';

import SideBar from '../../components/sidebar/sidebar.component';
import Map from '../../components/map/map.component';
import Footer from '../../components/footer/footer.component';

import { MainPageContainer, MapAndFooterContainer } from './main-page.styles';

const MainPage = () => (
  <MainPageContainer>
    <SideBar />
    <MapAndFooterContainer>
      <Map />
      <Footer />
    </MapAndFooterContainer>
  </MainPageContainer>
);

export default MainPage;
