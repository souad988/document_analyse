import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Retrieve data from local storage or set default empty values
const localData = JSON.parse(localStorage.getItem('docData')) || { document: {}, answers: [], questions: [] };
const { REACT_APP_BACKEND_URL } = process.env;

export const questionAnswer = createAsyncThunk('documents/questionAnswer', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${REACT_APP_BACKEND_URL}/questionAnswer`, { context: data.text, question: data.question }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return { answer: response.data.answer, question: data.question };
  } catch (err) {
    return rejectWithValue(err.response.data.error);
  }
});

export const initializeQAndA = () => ({
  type: 'documents/initializeQAndA',
  payload: [],
});

// Create a slice for managing document-related state
const questionAnswerSlice = createSlice({
  name: 'documents',
  initialState: {
    document: localData.document, // Holds uploaded document data
    loading: false, // Indicates if actions are in progress
    error: null, // Holds error information if any action fails
    status: 'idle', // Represents the current status of actions (idle/loading/succeeded/failed)
    questions: localData.questions || [],
    answers: localData.answers || [],
  },
  reducers: {
    initializeQAndA: (state, action) => {
      state.answers = action.payload;
      state.questions = action.payload;
    },
  }, // No additional reducers defined
  extraReducers: (builder) => {
    builder
      .addCase(questionAnswer.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(questionAnswer.fulfilled, (state, action) => {
        // Update state when text summarization action succeeds
        localStorage.setItem('docData', JSON.stringify(
          {
            ...localData,
            answers: [...state.answers, action.payload.answer],
            questions: [...state.questions, action.payload.question],
          },
        ));
        return {
          ...state,
          loading: false,
          status: 'succeeded',
          answers: [...state.answers, action.payload.answer],
          questions: [...state.questions, action.payload.question],
        };
      })
      .addCase(questionAnswer.rejected, (state, action) => ({
        ...state,
        loading: false,
        status: 'failed',
        error: action.payload,
        answers: [...state.answers, '...'],
      }));
  },
});

export default questionAnswerSlice.reducer;
