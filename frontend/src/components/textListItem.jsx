import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, Box, LinearProgress,
} from '@mui/material';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';

function TextListItem(props) {
  const { type, text, loading } = props;
  const classes = useCustomStyles(mainStyles);
  return (
    <Grid container className={classes.verticalBoxPadding}>
      <Grid container item xs={1} lg={1} md={1} direction="row" alignItems="center">
        <Box
          className={clsx(
            classes.bullet,
            classes.flexHorizontalCenter,
            type === 'Q' ? classes.mainColor : classes.secondaryColor,
          )}
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
        sx={{ paddingLeft: '1%' }}

      >
        {loading
          ? <LinearProgress color="inherit" />
          : (
            <Typography
              className={clsx(classes.text)}
            >
              {`- ${text}`}
            </Typography>
          )}

      </Grid>
    </Grid>
  );
}
TextListItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
TextListItem.defaultProps = {
  loading: false,
};
export default TextListItem;
