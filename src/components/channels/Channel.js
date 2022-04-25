import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { Grid, Paper, Box, Typography } from '@mui/material';
import PostCard from '../posts/PostCard.js';
import {
  allChannelPosts,
  getChannel,
  getChannelByName,
} from '../../api/channels_api.js';

const useStyles = makeStyles(() => ({
  root: {
    width: 316,
    alignItems: 'center',
  },
  heroImage: {
    minHeight: 150,
    height: 300,
    backgroundSize: 'Cover',
    borderRadius: 20,
    margin: 20,
    marginRight: '9%',
  },
  heroText: {
    marginBottom: 12,
    padding: 40,
    color: '#fff',
  },
  descBox: {
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    padding: 20,
    paddingBottom: 60,
  },
  channelDescTitle: {
    fontStyle: 'italic',
    fontSize: 35,
    marginBottom: 15,
  },
  postColumn: {
    marginLeft: 30,
  },
}));

const Channel = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [allPosts, setAllPosts] = React.useState([]);
  const [channel, setChannel] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      const channelData = await getChannelByName(id);
      if (channelData) {
        setChannel(channelData);

        const allPosts = await allChannelPosts(channelData.id);
        setAllPosts(allPosts);
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
            <Grid item xs></Grid>
          </Grid>
        )}

        <Grid item xs={7}>
          <Box className={classes.postColumn}>
            <Typography
              className={classes.channelDesc}
              variant='h3'
              color='initial'
            >
              Posts
            </Typography>
            <Box>
              <div>
                {allPosts &&
                  allPosts.map((post) => (
                    <PostCard post={post} key={post.id} />
                  ))}
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.descBox}>
            <Typography
              className={classes.channelDescTitle}
              variant='h3'
              color='initial'
            >
              About {channel.name}
            </Typography>
            <Typography variant='body1' color='initial'>
              {channel.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Channel;
