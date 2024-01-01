import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const uploadDocument = createAsyncThunk('documents/uploadDocument', async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post('http://127.0.0.1:8000/api/document/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  console.log(response.data);
  return response.data;
});

const documentManagerSlice = createSlice({
  name: 'documents',
  initialState: {
    document: {}, loading: false, error: null, status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocument.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'succeeded';
        state.document = action.payload;
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default documentManagerSlice.reducer;
