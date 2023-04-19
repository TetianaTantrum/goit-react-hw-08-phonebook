import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #032c45;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  &:hover {
    color: #f8de7e;
  }
`;
