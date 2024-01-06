import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';
import { textSummarize } from '../store/slices/documentManagerSlice';

const TextSummary = () => {
  const classes = useCustomStyles(mainStyles);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const {
    loading, error, summary, status,
  } = useSelector((state) => state.documents);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Container background={classes.background}>
      <Typography variant="h1" component="h2">Summarize text</Typography>
      {loading && <div>Loading...</div>}
      {status === 'succeeded' && <div>{summary}</div>}
      {status === 'failed' && <div>{error}</div>}
      <textarea type="text" name="text" onChange={(e) => handleChange(e)} />
      <button type="submit" onClick={() => dispatch(textSummarize(text))}>Upload</button>
    </Container>
  );
};

export default TextSummary;
