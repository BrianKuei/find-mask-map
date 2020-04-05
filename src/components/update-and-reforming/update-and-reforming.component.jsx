import React from 'react';

import { UpdateAndReformingContainer, UpdateTime, ReformingButton } from './update-and-reforming.styles';

const UpdateAndReforming = () => (
  <UpdateAndReformingContainer>
    <UpdateTime>
      <p>距離方圓 5公里 以內的供應商</p>
      <p>資訊更新時間 20:22:22</p>
    </UpdateTime>
    <ReformingButton>重整列表</ReformingButton>
  </UpdateAndReformingContainer>
);

export default UpdateAndReforming;
