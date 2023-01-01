import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid gray;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  margin-right: 10px;
`;

export const Name = styled.p`
  margin-left: auto;
`;
