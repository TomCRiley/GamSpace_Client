import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const { urlName } = useParams();

  const [allPosts, setAllPosts] = React.useState([]);
  const [channel, setChannel] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      // const allPosts = await allChannelPosts(channelName);
      // setAllPosts(allPosts);

      // Set channel data Tom!
      const channelData = await getChannelByName(urlName);
      if (channelData) {
        setChannel(channelData);
      }
    };

    getData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Box
          class={classes.heroImage}
          style={{ backgroundImage: `url(${channel.image})` }}
        >
          <Box class={classes.heroText}>
            <Typography variant='h2' component='div'>
              {channel.name}
            </Typography>
          </Box>
        </Box>
        <Grid item xs>
          <Item>Small Dialogue Area</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div>{allPosts ? <p>{`${allPosts.Channel}`}</p> : null}</div> GET
            ALL POSTS ONE CHANNEL
          </Item>
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
