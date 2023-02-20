import { useState } from 'react';
import axios from 'axios';

// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
// import { toast } from 'react-toastify';

// import { publicApi } from '../../http/http';
// import { authLoginThunk } from '../../redux/auth/auth.thunk';

const year = new Date().getFullYear();
const initialState = {
  email: '',
  name: '',
  password: '',
};

export const RegisterForm = () => {
  //   const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const [isPass, setIsPass] = useState(true);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      axios.post('https://connections-api.herokuapp.com/users/signup', values);
      setIsLoading(false);
      Notiflix.Notify.success('Чудово');
    } catch (error) {
      console.log(Notiflix.Notify.error('Помилка'));
    }

    // try {
    //   setIsLoading(true);
    //   await publicApi.post('/users/create', values);
    //   await dispatch(
    //     authLoginThunk({ email: values.email, password: values.password })
    //   ).unwrap();

    //   setIsLoading(false);
    //   toast.success('Success!');
    // } catch (e) {
    //   console.log(e);
    //   toast.error('Some error');
    // }
  };

  return (
    <>
      <form action="#" style={{ width: '450px' }} onSubmit={handleSubmit}>
        <h1>Please Sign In</h1>

        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
        </div>

        <div>
          <input
            id="password"
            name="password"
            type={isPass ? 'password' : 'text'}
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
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
