import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      // const { data: result } = await api.signupUser(data);
      const result = await api.signupUser(data);
      console.log(result, 'result');
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
