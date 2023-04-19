import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 360px;
  border-radius: 7px;
  background-color: #ffffff;
  padding: 5px 10px;
  border: 1px solid #686b76;
`;

export const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #148eff;
  margin: 0;
  animation: ${fadeIn} 1s ease-in;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #f8de7e;
  margin: 0;
  animation: ${fadeIn} 1s ease-in;
`;
