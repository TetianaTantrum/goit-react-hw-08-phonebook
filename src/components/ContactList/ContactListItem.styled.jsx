import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.p`
  padding: 0;
  margin: 0;
`;
export const ButtonEdit = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  color: #ffa032;
  cursor: pointer;
`;
export const ButtonClose = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  color: #ff1500;
  cursor: pointer;
`;

export const IconWrapperCross = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #ff1500;
  &:hover:after {
    content: 'Delete?';
    position: absolute;
    bottom: -25%;
    left: 350%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-out;
    white-space: nowrap;
    background-color: none;
  }
`;
export const IconWrapperEdit = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: transparent;
  color: #fc851d;
  &:hover:after {
    content: 'Edit?';
    position: absolute;
    bottom: -25%;
    left: 350%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-out;
    white-space: nowrap;
    background-color: none;
  }
`;

export const TableRow = styled.tr`
  background-color: #f5f5f5;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ebebeb;
  }

  & > td {
    padding: 12px;
    border: none;
  }
`;
export const TableCell = styled.td`
  padding: 10px;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
  color: #333;
  border: none;
  border-bottom: 1px solid #eee;

  &:first-child {
    font-weight: bold;
  }
`;
