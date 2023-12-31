import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './views/layout';
import TextSummary from './components/textSummary';
import DocumentUpload from './components/documentUpload';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: '#F5F5F5',
  },
  palette: {
    mode: 'light',
    contrast: '#FFF',
    text: {
      main: '#394867',
    },
    title: {
      main: '#90CAF9',
      secondary: '#9BA4B5',
    },
    background: {
      main: '#9BA4B5',
      secondary: '#F5F5F5',
    },
  },
});
const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="summarize" element={<TextSummary />} />
        <Route path="/Q&A" element={<DocumentUpload />} />
      </Route>
    </Routes>
  </ThemeProvider>
);

export default App;
