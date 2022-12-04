import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);