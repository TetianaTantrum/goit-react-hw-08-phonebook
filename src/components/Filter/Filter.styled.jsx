import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 500px;
  width: 100%;
  padding: 32px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  font-size: 16px;
  color: #4f4f4f;
`;
export const Input = styled.input`
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
  padding: 12px 16px;
  transition: box-shadow 0.2s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #0084ff80;
  }
`;
