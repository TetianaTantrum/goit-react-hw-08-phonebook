import React from 'react';
import { StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledLink to="/register">Sign in</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </div>
  );
}
