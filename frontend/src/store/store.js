import { configureStore } from '@reduxjs/toolkit';
import documentSlice from './slices/documentSlice';

const store = configureStore({
  reducer: {
    documentSlice,
  },
});

export default store;