import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from 'redux/auth/authApi';

import { setToken, setLoggedIn, setUser } from '../../redux/auth/auth.slice';

export const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    try {
      await login({ email, password }).then(data => {
        dispatch(setToken(data.data.token), setLoggedIn(true));
        dispatch(setUser(data.data.user.name));
      });

      Notiflix.Notify.success('Увійшов');
      navigate('/contacts', { replace: true });
    } catch (error) {}
  };

  return (
    <>
      <form style={{ width: '450px' }} onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Login page</h1>

        <div className="form-floating my-4">
          <input type="text" id="email" name="email" />
          <label htmlFor="email">Email address</label>
        </div>

        <div className="form-floating my-4">
          <input id="password" type="password" name="password" />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
