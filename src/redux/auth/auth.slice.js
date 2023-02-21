import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Опції для redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUserData: state => {
      state.token = '';
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { setToken, setLoggedIn, setUser, clearUserData } =
  authSlice.actions;

// Створення зберігаючого Reducer за допомогою redux-persist
const persistedAuthSlice = persistReducer(persistConfig, authSlice.reducer);

export default persistedAuthSlice;
