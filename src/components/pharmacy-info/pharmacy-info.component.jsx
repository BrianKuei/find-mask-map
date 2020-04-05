import React from 'react';

import PharmacyInfoUl from './pharmacy-info.styles';

const PharmacyInfo = () => (
  <PharmacyInfoUl>
    <li>
      <h5>地址</h5>
      <p>淡水區新市一路3段103號</p>
      <a href="#">於地圖查看</a>
    </li>
    <li>
      <h5>電話</h5>
      <p>02-26236573</p>
      <a href="#">撥打電話</a>
    </li>
    <li>
      <h5>備註</h5>
      <p className="remarks">2/17~2/22每日下午四點開始領號碼牌，當 場發放口罩.</p>
    </li>
  </PharmacyInfoUl>
);

export default PharmacyInfo;
