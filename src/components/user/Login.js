import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { userLogin } from '../../api/auth_api';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const styles = {
    '&.MuiButton-root': {
      marginTop: '7px',
      marginLeft: '6px',
    },
    '&.MuiButton-text': {
      color: 'grey',
    },
    '&.MuiButton-contained': {
      color: 'white',
    },
    '&.MuiButton-outlined': {
      color: 'green',
    },
  };

  // const [formData, setFormData] = React.useState({
  //   email: '',
  //   password: '',
  // });

  // const [required, updateRequired] = React.useState({
  //   email: '*',
  //   password: '*',
  // });

  const handleEmailChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setEmail(value);
    //updateRequired({ ...required, [name]: '' });
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword(value);
    //updateRequired({ ...required, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await userLogin({ email, password });
      //      updateErrorMessage(data.message);
      if (data.message.includes('Welcome back')) {
        window.location.assign(
          window.location.protocol + '//' + window.location.host + '/profile'
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Grid
        container
        m={5}
        spacing={1}
        direction='row'
        justifyContent='center'
        alignItems='center'
        alignContent='center'
        wrap='wrap'
      >
        <Grid item>
          <Typography variant='h1'>Log In</Typography>
          <form item className='form'>
            <TextField
              label='Email'
              id='email'
              onChange={handleEmailChange}
              type='text'
              variant='outlined'
              value={email}
              required={true}
              // formControlProps={{
              //   fullWidth: true,
              // }}
            />
            <TextField
              item
              label='Password'
              id='password'
              onChange={handlePasswordChange}
              type='password'
              value={password}
              required={true}
              // formControlProps={{
              //   fullWidth: true,
              // }}
            />

            <Button
              type='button'
              color='primary'
              className='form__custom-button'
              sx={styles}
              variant='contained'
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
