import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>

      {token && <NavLink to="/contacts">Contacts</NavLink>}
    </Nav>
  );
};
