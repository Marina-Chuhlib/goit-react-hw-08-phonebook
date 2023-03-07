import * as React from 'react';
import { useState } from 'react';

import { Button } from '@mui/material';

import TextField from 'shared/components/TextField/TextField';

import initialState from './initialState';
import fields from './fields';

import css from "./LoginForm.module.css"

const LoginForm = ({ onSubmit }) => {
const [state, setState] = useState({ ...initialState });

  const handleSearch = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({email, password});
    setState({ ...initialState });
  };
  const {email, password } = state;

 return (
    <>

      <form onSubmit={handleSubmit} className={css.form}>
        <TextField
          value={email}
          handleChange={handleSearch}
          {...fields.email}
        />
        <TextField
          value={password}
          handleChange={handleSearch}
          {...fields.password}
        />
        <Button type="submit" className={css.button}>Login</Button>
      </form>
    </>
  );


};

export default LoginForm;
