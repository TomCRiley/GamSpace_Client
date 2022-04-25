import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Paper,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import { registerUser } from '../../api/auth_api';

const useStyles = makeStyles(() => ({
  title: {
    color: '#008080',
    alignItems: 'center',
  },
}));

const Register = () => {
  const classes = useStyles();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [error, setError] = useState();
  const [submitError, setSubmitError] = useState('');

  const [imageDisplay, setImageDisplay] = useState();

  let navigate = useNavigate();

  const validatePwd = (pwd, conf) => {
    if (pwd !== conf) {
      setError('Password and Confirmation Password should match');
    } else {
      setError();
    }
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    validatePwd(e.target.value, passwordConf);
  };
  const handlePasswordConf = (e) => {
    setPasswordConf(e.target.value);
    validatePwd(password, e.target.value);
  };
  const handleFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };

  const getUserInfo = () => {
    const user = {
      username: userName,
      email: email,
      password: password,
      password_confirmation: passwordConf,
      first_name: first,
      last_name: last,
      image: imageDisplay,
    };
    // fields go in above
    return user;
  };

  const handleSubmit = async () => {
    setSubmitError();
    if (!error) {
      const response = await registerUser(getUserInfo());
      if (response.status === 200) {
        navigate('/login', { replace: true });
      } else {
        setSubmitError(response.data);
      }
    }
  };

  function handleUpload() {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: `${process.env.cloudName}`,
          uploadPreset: `${process.env.profilePicturePreset}`,
          maxImageFileSize: 5500000,
          showPoweredBy: false,
        },
        (err, result) => {
          if (result.event !== 'success') {
            return;
          }
          setImageDisplay(result.info.secure_url);
          updateFormData({
            ...formData,
            profileImage: result.info.secure_url,
          });
          updateImageDisplay(result.info.secure_url);
          console.log(
            'ALERT This is the uploaded picture:',
            result.info.secure_url,
            formData,
            imageDisplay
          );
        }
      )
      .open();
  }

  return (
    <Container maxWidth='lg'>
      <Paper elavation={3}>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Typography variant='h1' className={classes.title}>
              Sign Up
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <form>
              <Grid item xs={6}>
                <TextField
                  label='UserName'
                  id='username'
                  onChange={handleUserNameChange}
                  type='text'
                  variant='outlined'
                  value={userName}
                  required={true}
                />
                <TextField
                  label='Email'
                  id='email'
                  onChange={handleEmail}
                  type='text'
                  variant='outlined'
                  value={email}
                  required={true}
                />
                <TextField
                  label='Password'
                  id='password'
                  onChange={handlePassword}
                  type='password'
                  variant='outlined'
                  value={password}
                  required={true}
                  error={error ? true : false}
                  helperText={error}
                />
                <TextField
                  label='Password Confirmation'
                  id='password_confirmation'
                  onChange={handlePasswordConf}
                  type='password'
                  variant='outlined'
                  value={passwordConf}
                  required={true}
                  error={error ? true : false}
                  helperText={error}
                />
                <TextField
                  label='First Name'
                  id='first_name'
                  onChange={handleFirst}
                  type='text'
                  variant='outlined'
                  value={first}
                  required={true}
                />
                <TextField
                  label='Last Name'
                  id='last_name'
                  onChange={handleLast}
                  type='text'
                  variant='outlined'
                  value={last}
                  required={true}
                />
              </Grid>
              <Grid item xs={6}>
                <Container>
                  {imageDisplay && <img src={imageDisplay} />}
                  <Box>
                    <Button onClick={handleUpload}>
                      cloudinary image uploader
                    </Button>
                  </Box>
                </Container>
              </Grid>
              <Button onClick={handleSubmit}>Submit</Button>
              {submitError && <Typography>{submitError}</Typography>}
              {/* Submit should send the user information to the api using getUserInfo() */}
            </form>
          </Grid>
          <Box>{/* <img src={imageDisplay} /> */}</Box>
          <Grid item xs={12}>
            Find us on
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
