import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;

  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const Label = styled.span`
  font-weight: 200;
`;

export const Percentage = styled.span`
  font-weight: 700;
`;
