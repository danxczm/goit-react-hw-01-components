import styled from '@emotion/styled';

export const TransactionHistoryContainer = styled.table`
  width: 600px;
  border-collapse: collapse;
  border: solid 2px;
  border-radius: 5px;

  th {
    padding: 10px;
    border: solid 1px;

    background-color: rgb(224, 224, 224);
  }
  td {
    border: solid 1px;
    text-align: center;
    padding: 10px;
  }

  tr:nth-of-type(even) {
    background-color: rgb(187, 187, 187);
  }
`;
