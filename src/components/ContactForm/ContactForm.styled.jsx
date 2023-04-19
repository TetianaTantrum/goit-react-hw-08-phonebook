import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

// export const Form = styled(FormikForm)`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   align-items: center;
//   margin-bottom: 20px;
// `;
// export const FormField = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   justify-content: center;
//   width: 100%;
// `;

// export const Inputs = styled(Field)`
//   border: none;
//   border-radius: 4px;
//   background-color: #f2f2f2;
//   padding: 12px 16px;
//   transition: box-shadow 0.2s ease-in-out;

//   &:focus {
//     outline: none;
//     box-shadow: 0px 0px 5px #0084ff80;
//   }
// `;

// export const ErrorMessage = styled(FormikError)`
//   font-size: 14px;
//   color: red;
//   padding: 0;
// `;
// export const Button = styled.button`
//   font-size: 14px;
//   text-align: center;
//   padding: 5px 10px;
//   color: white;
//   background-color: #5e5e73;
//   border-radius: 5px;
//   max-width: 150px;
// `;

export const Form = styled(FormikForm)`
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

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 16px;
  color: #4f4f4f;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  font-size: 16px;
  color: #4f4f4f;
  input {
    border: none;
    border-radius: 4px;
    background-color: #f2f2f2;
    padding: 12px 16px;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px #0084ff80;
    }
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 12px 16px;
  border: none;
  background-color: #148eff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #0065cc;
  }
`;
