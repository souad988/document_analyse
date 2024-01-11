import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Retrieve data from local storage or set default empty values
const localData = JSON.parse(localStorage.getItem('docData')) || { textToSummarize: '', summary: '' };
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
  // Update local storage with the provided text
  localStorage.setItem('docData', JSON.stringify({ ...localData, textToSummarize: text }));
  try {
  // Summarize the text using Axios POST request
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/summarize`, text, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response from backend', response);
    return response.data;
  } catch (err) {
    // Use `err.response.data` as `action.payload` for a `rejected` action,
    // by explicitly returning it using the `rejectWithValue()` utility
    console.log('from action catch:', err.response.data.error);
    return rejectWithValue(err.response.data.error);
  }
});

export const answerQuestion = createAsyncThunk('documents/answerQuestion', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/question`, { context: data.text, question: data.question }, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response from backend', response);
    return response.data;
  } catch (err) {
    // Use `err.response.data` as `action.payload` for a `rejected` action,
    // by explicitly returning it using the `rejectWithValue()` utility
    console.log('from action catch:', err.response.data.error);
    return rejectWithValue(err.response.data.error);
  }
});

// Create a slice for managing document-related state
const documentManagerSlice = createSlice({
  name: 'documents',
  initialState: {
    document: {}, // Holds uploaded document data
    loading: false, // Indicates if actions are in progress
    error: null, // Holds error information if any action fails
    status: 'idle', // Represents the current status of actions (idle/loading/succeeded/failed)
    summary: '', // Holds summarized text
    textToSummarize: '', // Stores text to be summarized
    questions: ['first question', 'second question'],
    answers: ['first answer', 'second answer'],
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
        // Update state when document upload action succeeds
        state.loading = false;
        state.status = 'succeeded';
        state.document = action.payload;
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
        localStorage.setItem('docData', JSON.stringify({ ...localData, summary: action.payload }));
        return {
          ...state,
          loading: false,
          status: 'succeeded',
          summary: action.payload,
        };
      })
      .addCase(textSummarize.rejected, (state, action) => {
        // Update state when text summarization action fails
        console.log('payload error', action.payload);
        return {
          ...state,
          loading: false,
          status: 'failed',
          error: action.payload,
        };
      })
      .addCase(answerQuestion.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(answerQuestion.fulfilled, (state, action) => {
        // Update state when text summarization action succeeds
        localStorage.setItem('docData', JSON.stringify({ ...localData, answers: [...state.answers, action.payload] }));
        return {
          ...state,
          loading: false,
          status: 'succeeded',
          answers: [...state.answers, action.payload],
        };
      })
      .addCase(answerQuestion.rejected, (state, action) => {
        // Update state when text summarization action fails
        console.log('payload error', action.payload);
        return {
          ...state,
          loading: false,
          status: 'failed',
          error: action.payload,
          answers: [...state.answers, null],
        };
      });
  },
});

export default documentManagerSlice.reducer;
