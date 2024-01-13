import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './slices/documentManagerSlice';
import questionAnswerReducer from './slices/questionAnswerSlice';

const store = configureStore({
  reducer: {
    documents: documentReducer,
    questionAnswer: questionAnswerReducer,
  },
});

export default store;
