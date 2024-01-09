import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';

function Header() {
  const classes = useCustomStyles(mainStyles);
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} className={clsx(classes.logo, classes.mainTitle)}>
          {'Doc{Nlp}'}
        </Typography>
        <nav>
          <Link
            to="/summarize"
            className={classes.link}
          >
            Summarize
          </Link>
          <Link
            to="/summarize"
            className={classes.link}
          >
            Categorize
          </Link>
          <Link
            to="/Q&A"
            className={classes.link}
          >
            Q&A
          </Link>

        </nav>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
