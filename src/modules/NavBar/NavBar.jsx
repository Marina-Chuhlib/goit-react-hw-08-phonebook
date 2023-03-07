import { NavLink } from 'react-router-dom';

import UserAuth from './UserAuth/UserAuth';

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

import css from './NavBar.module.css';

import { Home } from '@mui/icons-material';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />

      <UserAuth />
    

      {/* <nav className={css.text}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>

          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Phone Book</NavLink>
          </li>
        </ul>
        </nav> */}

      {/* 
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
                mr: 10,
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

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/goit-react-hw-08-phonebook/register"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 400,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Register
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/goit-react-hw-08-phonebook/login"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 400,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Login
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/goit-react-hw-08-phonebook/contacts"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 400,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Typography>
          </Toolbar>
        </Container>
      </AppBar> */}
    </nav>
  );
};

export default NavBar;
