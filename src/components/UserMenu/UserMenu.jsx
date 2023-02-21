import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectAuthUser } from 'redux/auth/auth.selector';
import { clearUserData } from 'redux/auth/auth.slice';
import { useGetUserQuery, useLogOutMutation } from 'redux/auth/authApi';

export const UserMenu = () => {
  const token = useSelector(selectAuthToken);
  const users = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const hendelSubmit = e => {
    e.preventDefault();

    dispatch(clearUserData());
  };

  return (
    token && (
      <>
        <p>Welcome, {users} </p>
        <button type="button" onClick={hendelSubmit}>
          Logout
        </button>
      </>
    )
  );
};
