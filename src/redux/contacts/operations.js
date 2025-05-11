import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../auth/operations';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  console.log('FETCH CONTACTS CALL');

  try {
    const response = await authApi.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await authApi.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const response = await authApi.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
