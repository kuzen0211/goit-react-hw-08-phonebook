import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selector';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {token && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
