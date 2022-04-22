import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { userLogin } from '../../api/auth_api';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      <form className='form'>
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
          onClick={handleSubmit}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
