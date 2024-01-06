import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DocumentUpload from './components/documentUpload';
import TextSummary from './components/textSummary';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <TextSummary />
      <DocumentUpload />
    </div>
  </ThemeProvider>
);

export default App;
