import styled from 'styled-components';

import stockFull from '../../assets/ic_stock_full@2x.png';
import stockFew from '../../assets/ic_stock_few@2x.png';
import stockNone from '../../assets/ic_stock_none@2x.png';


const quantityWarningLight = (param) => {
  if (parseInt(param, 10) > 100) return '#11787A';
  if (parseInt(param, 10) < 100) return '#E47E30';
  if (parseInt(param, 10) === 0) return '#B7BBBD';
  return 'black';
};

const stockState = (param) => {
  if (parseInt(param, 10) > 100) return stockFull;
  if (parseInt(param, 10) < 100) return stockFew;
  if (parseInt(param, 10) === 0) return stockNone;
  return stockNone;
};

const MaskQuantityContainer = styled.div`
  width: 150px;
  height: 92px;
  display:flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-between;
  padding: 12px 0 10px 16px;
  color: #fff;
  background: url('${({ quantity }) => stockState(quantity)}') no-repeat 105px 30px;
  background-size: 49px 49px;
  background-color: ${({ quantity }) => quantityWarningLight(quantity)};
  margin-right: 6px;


  h3 {
    font-size: 32px;
  }

  h5 {
    font-size: 14px;
  }

  span {
    font-size: 18px;
    opacity: 0.7;
  }
`;


export default MaskQuantityContainer;
