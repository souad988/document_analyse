import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const localData = JSON.parse(localStorage.getItem('docData')) || { text: '', summary: '' };
const { REACT_APP_BACKEND_URL } = process.env;

export const uploadDocument = createAsyncThunk('documents/uploadDocument', async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await axios.post(`${REACT_APP_BACKEND_URL}/upload`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  return response.data;
});
export const textSummarize = createAsyncThunk('documents/textSummarize', async (text) => {
  localStorage.setItem('docData', JSON.stringify({...localData,text: text}));
  const response = await axios.post(`${REACT_APP_BACKEND_URL}/summarize`, text, { headers: { 'Content-Type': 'application/json' } });
  return response.data;
});

const documentManagerSlice = createSlice({
  name: 'documents',
  initialState: {
    document: {},
    loading: false,
    error: null,
    status: 'idle',
    summary: '',
    text: localData.text,
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
      })
      .addCase(textSummarize.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(textSummarize.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'succeeded';
        state.summary = action.payload;
      })
      .addCase(textSummarize.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default documentManagerSlice.reducer;
