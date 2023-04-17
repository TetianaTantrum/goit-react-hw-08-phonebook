import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Button = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
`;

export const WelcomeMessage = styled.p`
  position: absolute;
  bottom: -30px;
  left: 50%;
  bottom: -200%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #000;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-out, visibility 0s ease-out 0.3s;
  opacity: 0;
  visibility: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #fff transparent transparent transparent;
  }

  &:before {
    bottom: -10px;
  }

  &:after {
    bottom: -9px;
    border-width: 10px 10px 0 10px;
    border-color: #ffffff transparent transparent transparent;
  }
`;

export const IconWrapperUser = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #fddd3c;
  }

  &:hover:after {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #000;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-out;
    white-space: nowrap;
    &:before,
    &:after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-width: 10px 10px 0 10px;
      border-color: #fff transparent transparent transparent;
    }

    &:before {
      bottom: -10px;
    }

    &:after {
      bottom: -9px;
      border-width: 10px 10px 0 10px;
      border-color: #fff transparent transparent transparent;
    }
  }

  &:hover > ${WelcomeMessage} {
    opacity: 1;
    visibility: visible;
  }
`;

export const IconWrapperLogout = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    color: #fddd3c;
  }
  &:hover:after {
    content: 'Log out?';
    position: absolute;
    bottom: -50px;
    left: 50%;
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
