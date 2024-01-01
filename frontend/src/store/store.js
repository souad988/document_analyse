import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './slices/documentManagerSlice';

const store = configureStore({
  reducer: {
    documents: documentReducer,
  },
});

export default store;
