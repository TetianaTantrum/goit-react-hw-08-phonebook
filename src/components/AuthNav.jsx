import React from 'react';
import { StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
}
