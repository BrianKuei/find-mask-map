import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/header/header.component';
import MainPageContainer from './pages/main-page/main-page.component';

const App = () => {
  const [pharmacysData, setPharmacysData] = useState([]);
  console.log(pharmacysData);


  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR3-IJR9MrE_O1WY4yAVi9zK70SWqYABEir5iyYadUz912GHxPfUtpM3j38')
      .then((response) => setPharmacysData(response.data.features));
  }, []);

  return (
    <>
      <Header />
      <MainPageContainer />
    </>
  );
};

export default App;
