import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { getChannels } from '../api/channels_api';
import ChannelList from '../components/channels/ChannelList';
import { makeStyles } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const home = () => {
  const [channels, setChannels] = useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const channels = await getChannels();
      setChannels(channels);
    };

    getData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Item>Trending Channels ❤️‍🔥</Item>
        </Grid>
        <Grid item xs={8}>
          <ChannelList channels={channels} />
        </Grid>
        <Grid item xs={2}>
          <Item>Meetups! 🫂</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default home;
