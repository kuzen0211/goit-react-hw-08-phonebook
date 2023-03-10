import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthToken } from 'redux/auth/auth.selector';
import { Box } from './Auth.styled';

export const AuthNav = () => {
  const token = useSelector(selectAuthToken);
  return (
    !token && (
      <Box>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </Box>
    )
  );
};
