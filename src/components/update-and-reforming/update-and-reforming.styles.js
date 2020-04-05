import styled from 'styled-components';

export const UpdateAndReformingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpdateTime = styled.div`
  display: flex;
  flex-direction: column;
  color: #566778;
  font-size: 14px;
  line-height: 20px;
`;

export const ReformingButton = styled.button`
  padding: 8px 20px;
  color: #34495E;
  border: 2px solid #34495E;
  border-radius: 20px;

  &:hover {
    color: #fff;
    background: #4C5B6C;
  }
`;
