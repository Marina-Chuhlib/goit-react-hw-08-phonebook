import * as React from 'react';

import useForm from 'shared/hooks/useForm';

// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import { styled } from '@mui/material/styles';
// import { Button } from '@mui/material';
// import { blue } from '@mui/material/colors';

import TextField from 'shared/components/TextField/TextField';

import initialState from './initialState';
import fields from './fields';

import css from './RegisterForm.module.css';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(blue[200]),
//   backgroundColor: blue[200],
//   //   color:blueGrey[200],
//   '&:hover': {
//     backgroundColor: blue[500],
//   },
// }));

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  
  console.log(state, "RegisterForm")

  const { name, email, password } = state;

  return (
    <>
      <h2 className={css.title}>New user registration</h2>

      <form onSubmit={handleSubmit} className={css.form}>
        <TextField value={name} handleChange={handleChange} {...fields.name} />
        <TextField
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextField
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
        <button type="submit">Register</button>
        {/* <ColorButton endIcon={<HowToRegIcon />} variant="contained">
        Register
      </ColorButton> */}
        {/* <Button endIcon={<HowToRegIcon />} variant="contained" >
        Register
      </Button> */}
      </form>
    </>
  );
};

export default RegisterForm;

