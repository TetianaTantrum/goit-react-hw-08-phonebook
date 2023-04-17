import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #0075be;
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  margin-right: 20px;
  &:hover {
    color: #f8de7e;
  }
`;
export const ContactsNavLink = styled(NavLink)`
  color: #032c45;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  &:hover {
    color: #0075be;
  }
`;
