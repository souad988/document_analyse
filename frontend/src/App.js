import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './views/layout';
import TextSummary from './components/textSummary'
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    contrast: '#FFF',
    title: {
      main: '#90CAF9',
      secondary: '9BA4B5',
    },
    background: '9BA4B5',
  },
});
const App = () => (
  <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TextSummary />} />
          <Route path="Q&A" element={<TextSummary />} />
        </Route>
    </Routes>
  </ThemeProvider>
);

export default App;
