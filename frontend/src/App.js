import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './views/layout';
import TextSummary from './components/textSummary';

const theme = createTheme({
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
        <Route path="Q&A" element={<TextSummary />} />
      </Route>
    </Routes>
  </ThemeProvider>
);

export default App;
