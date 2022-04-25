import React from 'react';
import { allUserPosts, getUserProfile } from '../../api/auth_api.js';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../../UserAuth/auth.js';
import { Container, Paper, Grid, Card, Typography } from '@mui/material';
import ChannelCard from '../channels/ChannelCard.js';
import ChannelList from '../channels/ChannelList.js';
import { makeStyles } from '@mui/styles';

import { getUserChannels } from '../../api/channels_api.js';

const useStyles = makeStyles(() => ({
  profileImage: {
    width: 350,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 50,
  },
  username: {
    marginTop: 15,
    marginBottom: 5,
  },
  handle: {
    fontStyle: 'italic',
    color: 'lightGrey',
  },
}));

const UserProfile = () => {
  const [channels, setChannels] = React.useState([]);
  const [posts, setUserPosts] = React.useState([]);
  const [user, setUser] = React.useState();

  const classes = useStyles();

  React.useEffect(() => {
    const getData = async () => {
      const user = await getUserProfile();
      // const posts = await allUserPosts();
      //SetUserPosts(posts);
      setUser(user);
      setChannels(getUserChannels());
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
        {user && (
          <Grid item>
            <Grid item xs={10}>
              <img
                className={classes.profileImage}
                src={user.image}
                alt='image'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.username}
                variant='h3'
                color='initial'
              >
                {`${user.first_name} ${user.last_name}`}
              </Typography>
              <Typography
                className={classes.handle}
                variant='body1'
                color='initial'
              >
                {user.username}
              </Typography>
              <Typography variant='body1' color='initial'>
                {user.bio}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Grid>
        {channels && channels.length > 0 && <ChannelList channels={channels} />}
      </Grid>
    </Container>
  );
};

export default UserProfile;
