import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  success,
  errorMassege,
  removeMessage,
} from 'components/SharedLayout/NotificationAppBar/NotificationApp';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContacts, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContacts);
        success();
      return data;
    } catch (error) {
        errorMassege();
      return rejectWithValue(error);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
        removeMessage();
      return data;
    } catch (error) {
       errorMassege();
      return rejectWithValue(error);
    }
  }
);