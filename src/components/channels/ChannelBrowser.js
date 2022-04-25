import React from 'react';
import { getChannels } from '../../api/channels_api';
import { useNavigate } from 'react-router-dom';
import ChannelList from './ChannelList';
import { Container, Paper, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 100,
  },
  heroText: {
    marginLeft: 30,
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
    <Container>
      <Grid
        container
        spacing={1}
        direction='row'
        justifyContent='center'
        alignItems='center'
        alignContent='center'
        wrap='wrap'
      >
        <Grid item xs={12}>
          <Typography className={classes.heroText} variant='h1' color='initial'>
            Channel Browser
          </Typography>
        </Grid>
        <Grid item xs={10}>
          {!channels ? (
            <h1>No channels found</h1>
          ) : (
            <ChannelList channels={channels} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChannelBrowser;
