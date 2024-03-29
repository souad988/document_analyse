import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles/index';

const Copyright = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Typography variant="body2" className={clsx(classes.link)}>
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

// TODO remove, this demo shouldn't need to reset the theme.

const Footer = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box
      component="footer"
      className={clsx(classes.flexVerticalCenter, classes.footerContainer)}
    >
      <CssBaseline />
      <Container maxWidth="sm" className={clsx(classes.flexVerticalCenter)}>
        <Typography variant="body1" className={clsx(classes.secondaryTitle)}>
          souadelmansouri2018@gmail.com
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
