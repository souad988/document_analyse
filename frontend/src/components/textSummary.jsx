import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Typography, CircularProgress, Box,
  Grid, Button,
} from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import clsx from 'clsx';
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
    <Container
      className={
        clsx(classes.flexHorizontalCenter)
        }
    >
      <Typography className={classes.mainTitle} variant="h1" component="h2">Summarize text</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          {loading
        && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        )}
          <Box>
            {status === 'succeeded'
            && (
            <Typography>
              { summary }
            </Typography>
            )}
            {status === 'failed' && <Typography>{ error }</Typography>}

          </Box>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Box
            className={
              clsx(classes.shadow,
                classes.flexHorizontalCenter,
                classes.boxPadding,
                classes.backgroundColor)
}
          >
            <TextareaAutosize
              minRows={20}
              type="text"
              name="text"
              onChange={(e) => handleChange(e)}
              value={text}
              className={
                clsx(classes.textArea,
                  classes.fullWidth,
                  classes.shadow)
}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={() => dispatch(textSummarize(text))}
              className={classes.btn}
            >
              Summarize
            </Button>
          </Box>
        </Grid>
      </Grid>

    </Container>
  );
};

export default TextSummary;
