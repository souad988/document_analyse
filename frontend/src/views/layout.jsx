import React from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

const Layout = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <Outlet />
    </Grid>
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
);

export default Layout;