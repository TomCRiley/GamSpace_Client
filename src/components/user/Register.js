import React, { useState } from 'react';
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

const useStyles = makeStyles(() => ({
  title: {
    color: 'blue',
  },
}));

const Register = () => {
  const classes = useStyles();

  const [userName, setUserName] = useState('');

  const handleUserNameChange = (e) => {
    if (e.target.value) {
      setUserName(e.target.value);
    }
  };

  const getUserInfo = () => {
    const user = {
      username: userName,
    };
    // fields go in above
    return user;
  };

  // Call Api method using getUserinfo

  return (
    <Container>
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
                {/* Other Fields go here */}
              </Grid>
              <Grid item xs={6}>
                <Container>
                  <Box>
                    Upload an avatar image here. Use discover.ly as an example
                    of how to upload an image and save the url in the userImage
                    state const
                  </Box>
                </Container>
              </Grid>
              <Button>Submit</Button>
              {/* Submit should send the user information to the api using getUserInfo() */}
            </form>
          </Grid>
          <Grid item xs={12}>
            Find us on
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
