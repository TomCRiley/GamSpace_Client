import React from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';

const Channel = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Item>Small Dialogue Area</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Channel Cards</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Channel;

// https://codesandbox.io/s/ttk5tj?file=/demo.js:541-552
// https://mui.com/material-ui/react-grid/#how-it-works
