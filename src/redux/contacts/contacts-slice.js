
import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContacts, removeContacts } from "./contactsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const counterSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    extraReducers: {
        [fetchContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.items.push({ ...action.payload });
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [removeContacts.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeContacts.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [removeContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
            
    }
});







