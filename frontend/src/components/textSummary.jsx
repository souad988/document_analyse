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
  const {
    loading, error, summary, status, textTosummarize,
  } = useSelector((state) => state.documents);
  const [text, setText] = useState(textTosummarize);
  const dispatch = useDispatch();

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
        <Grid
          item
          xs={12}
          lg={12}
        >
          {loading
        && (
        <Box
          className={
            clsx(classes.backgroundColor,
              classes.shadow,
              classes.boxPadding)
          }
        >
          <CircularProgress />
        </Box>
        )}
          <Box className={
          clsx(classes.backgroundColor,
            classes.shadow,
            classes.boxPadding)
        }
          >
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
              maxRows={20}
              type="text"
              name="text"
              onChange={(e) => handleChange(e)}
              value={text}
              placeholder="Put the text to summarize here."
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
              disabled={loading}
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
