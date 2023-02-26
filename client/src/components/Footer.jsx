import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Stack, Typography, Box } from '@mui/material';

import Container from './Container';
import Logo from './Logo';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
function Footer() {
  return (
    <Container>
      <Paper square sx={{ backgroundImage: 'unset', padding: '2rem' }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row ' }}
          sx={{ height: 'max-content' }}
        >
          <Logo />
          <Copyright />
        </Stack>
      </Paper>
    </Container>
  );
}

export default Footer;
