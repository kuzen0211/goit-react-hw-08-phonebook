import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken, setLoggedIn } from './auth.slice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    registaration: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),

    login: builder.mutation({
      query: newUser => ({
        url: '/users/login',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),

    logOut: builder.mutation({
      query: newUser => ({
        url: '/users/logout',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),

    getUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useRegistarationMutation,
  useLoginMutation,
  useGetUserQuery,
  useLogOutMutation,
} = authApi;
