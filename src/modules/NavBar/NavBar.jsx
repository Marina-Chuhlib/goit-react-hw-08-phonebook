import UserAuth from './UserAuth/UserAuth';

import * as React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import { Home } from '@mui/icons-material';

const NavBar = () => {
  return (
    <AppBar position="static" component="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters component="nav">
          <Home sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/goit-react-hw-08-phonebook"
            sx={{
              mr: 12,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>

          <UserAuth />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
