import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  padding: 32px;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }
  th {
    font-weight: bold;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
  color: #4f4f4f;
`;
export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;
export const Cover = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 12px;
`;
