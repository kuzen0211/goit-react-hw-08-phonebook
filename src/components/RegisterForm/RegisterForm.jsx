import { useState } from 'react';

import { useRegistarationMutation } from 'redux/auth/authApi';

import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import { setToken, setLoggedIn } from '../../redux/auth/auth.slice';
import { useDispatch } from 'react-redux';

const year = new Date().getFullYear();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [isPass, setIsPass] = useState(true);

  const [registration] = useRegistarationMutation();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const name = e.currentTarget.elements.name.value;
    const password = e.currentTarget.elements.password.value;

    try {
      await registration({ name, email, password }).then(data => {
        console.log(data);
        dispatch(setToken(data.token));
        dispatch(setLoggedIn(true));
        Notiflix.Notify.success(`Added contact ${name}`);
        e.currentTarget.reset();
        // dispatch(setUser(data.user.name));
      });
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
