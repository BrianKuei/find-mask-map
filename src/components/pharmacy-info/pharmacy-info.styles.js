import styled from 'styled-components';

const PharmacyInfoUl = styled.ul`
  height: 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  li {
    display: flex;
    margin-bottom: 14px;
  }

  h5 {
    font-size: 14px;
    color: #34495E;
    width: 10%;
    margin-right: 5px;
  }

  p {
    font-size: 14px;
    color: #70777C;
    width: 70%;
  }

  .remarks {
    width: 90%;
    line-height: 19px;
  }

  a {
    font-size: 12px;
    color: #70777C;
    width: 21%;
    text-align: right;
  }
`;

export default PharmacyInfoUl;
