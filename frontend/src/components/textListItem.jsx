import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, Box,
} from '@mui/material';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';

function TextListItem(props) {
  const { type, text } = props;
  const classes = useCustomStyles(mainStyles);
  return (
    <Grid container className={classes.boxPadding}>
      <Grid container item xs={1} lg={1} md={1} direction="row" justifyContent="flex-end">
        <Box
          className={clsx(classes.bullet, classes.flexHorizontalCenter)}
        >
          {' '}
          {type}
        </Box>
      </Grid>
      <Grid
        item
        xs={11}
        lg={11}
        md={11}
      >
        <Typography
          className={clsx(classes.text)}
          sx={{ color: '#394867' }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}
TextListItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default TextListItem;
