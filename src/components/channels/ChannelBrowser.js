import React from 'react';
import { getChannels } from '../../api/channels_api';
import { useNavigate } from 'react-router-dom';
import ChannelList from './ChannelList';
import { Container, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 100,
  },
}));

const ChannelBrowser = () => {
  const classes = useStyles();
  const [channels, setChannels] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const channels = await getChannels();
      setChannels(channels);
    };

    getData();
  }, []);

  return (
    <Paper>
      <Container container>
        <Typography variant='h1' color='initial'>
          Channel Browser
        </Typography>

        <br />
        {!channels ? (
          <h1>No channels found</h1>
        ) : (
          <ChannelList channels={channels} />
        )}
      </Container>
    </Paper>
  );
};

export default ChannelBrowser;
