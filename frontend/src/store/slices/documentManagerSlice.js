import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Retrieve data from local storage or set default empty values
const localData = JSON.parse(localStorage.getItem('docData')) || {
  document: {}, textToSummarize: '', summary: '',
};
const { REACT_APP_BACKEND_URL } = process.env;

// Async Thunk to upload a document
export const uploadDocument = createAsyncThunk('documents/uploadDocument', async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  // Upload the document using Axios POST request
  const response = await axios.post(`${REACT_APP_BACKEND_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
});

// Async Thunk to summarize text
export const textSummarize = createAsyncThunk('documents/textSummarize', async (text, { rejectWithValue }) => {
  try {
  // Summarize the text using Axios POST request
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/summarize`, text, {
      headers: { 'Content-Type': 'application/json' },
    });
    return { summary: response.data, textToSummarize: text };
  } catch (err) {
    return rejectWithValue(err.response.data.error);
  }
});

// Create a slice for managing document-related state
const documentManagerSlice = createSlice({
  name: 'documents',
  initialState: {
    document: localData.document, // Holds uploaded document data
    loading: false, // Indicates if actions are in progress
    error: null, // Holds error information if any action fails
    status: 'idle', // Represents the current status of actions (idle/loading/succeeded/failed)
    summary: localData.summary, // Holds summarized text
    textToSummarize: localData.textToSummarize, // Stores text to be summarized
  },
  reducers: {}, // No additional reducers defined
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocument.pending, (state) => {
        // Update state when document upload action starts
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        // Update localStorage when document upload action succeeds
        localStorage.setItem('docData', JSON.stringify(
          {
            ...localData,
            document: action.payload,
            questions: [],
            answers: [],
          },
        ));
        return {
          ...state,
          loading: false,
          status: 'succeeded',
          document: action.payload,
        };
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        // Update state when document upload action fails
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(textSummarize.pending, (state) => {
        // Update state when text summarization action starts
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(textSummarize.fulfilled, (state, action) => {
        // Update state when text summarization action succeeds
        localStorage.setItem('docData', JSON.stringify(
          {
            ...localData,
            summary: action.payload.summary,
            textToSummarize: action.payload.textToSummarize,
          },
        ));
        return {
          ...state,
          loading: false,
          status: 'succeeded',
          summary: action.payload.summary,
        };
      })
      .addCase(textSummarize.rejected, (state, action) => ({
        ...state,
        loading: false,
        status: 'failed',
        error: action.payload,
      }));
  },
});

export default documentManagerSlice.reducer;
