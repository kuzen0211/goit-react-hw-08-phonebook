import { useState } from 'react';

import { useRegistarationMutation, useLoginMutation } from 'redux/auth/authApi';

import { Link, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { setToken, setLoggedIn, setUser } from '../../redux/auth/auth.slice';
import { useDispatch } from 'react-redux';

const year = new Date().getFullYear();

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPass, setIsPass] = useState(true);

  const [registration] = useRegistarationMutation();
  const [login] = useLoginMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const name = e.currentTarget.elements.name.value;
    const password = e.currentTarget.elements.password.value;

    try {
      await registration({ name, email, password }).then(data => {
        console.log(data);
        dispatch(setToken(data.data.token), setLoggedIn(true));

        Notiflix.Notify.success(`Added contact ${name}`);
        e.currentTarget.reset();
        // dispatch(setUser(data.user.name));
      });
    } catch (error) {}

    try {
      await login({ email, password }).then(data => {
        console.log(data);
        dispatch(setToken(data.data.token), setLoggedIn(true));
        dispatch(setUser(data.data.user.name));
      });

      Notiflix.Notify.success('Увійшов');
      navigate('/contacts', { replace: true });
    } catch (error) {}
  };

  return (
    <>
      <form action="#" style={{ width: '450px' }} onSubmit={handleSubmit}>
        <h1>Please Sign In</h1>

        <div>
          <input id="email" name="email" type="email" autoComplete="username" />
          <label htmlFor="email">Email address</label>
        </div>

        <div>
          <input id="name" name="name" type="name" autoComplete="off" />
          <label htmlFor="name">Name</label>
        </div>

        <div>
          <input
            id="password"
            name="password"
            type={isPass ? 'password' : 'text'}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password</label>
        </div>

        <button type="button" onClick={() => setIsPass(prev => !prev)}>
          toggle
        </button>

        <Link to="/login">Already has account?</Link>

        <button type="submit">Sign In</button>
        <p>© {year}</p>
      </form>
    </>
  );
};
