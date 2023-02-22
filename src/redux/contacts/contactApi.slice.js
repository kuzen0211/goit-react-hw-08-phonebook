import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContacts } = contactsSlice.actions;
