import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { Grid, Paper, Box, Typography } from '@mui/material';

import { allChannelPosts, getChannel } from '../../api/channels_api.js';

const useStyles = makeStyles(() => ({
  root: {
    width: 316,
  },
  heroImage: {
    minHeight: 150,
  },
  heroText: {
    marginBottom: 12,
  },
}));

const Channel = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [allPosts, setAllPosts] = React.useState([]);
  const [channel, setChannel] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      // const allPosts = await allChannelPosts(channelName);
      // setAllPosts(allPosts);

      const channelData = await getChannel(id);
      if (channelData) {
        setChannel(channelData);
      }
    };

    getData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={12}>
        {channel && (
          <Grid item xs={12}>
            <Box
              className={classes.heroImage}
              style={{ backgroundImage: `url(${channel.image})` }}
            >
              <Box className={classes.heroText}>
                <Typography variant='h2' component='div'>
                  {channel.name}
                </Typography>
              </Box>
            </Box>
            <Grid item xs>
              <Typography variant='body1' color='initial'>
                {channel.description}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid item xs={6}>
          <Box>
            <div>{allPosts ? <p>{`${allPosts.Channel}`}</p> : null}</div> GET
            ALL POSTS ONE CHANNEL
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>xs=4</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Channel;

// https://codesandbox.io/s/ttk5tj?file=/demo.js:541-552
// https://mui.com/material-ui/react-grid/#how-it-works
