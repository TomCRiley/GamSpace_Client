import React from 'react';
import { allUserPosts, getUserProfile } from '../../api/auth_api.js';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../../UserAuth/auth.js';
import { Container, Paper, Grid, Card, Typography } from '@mui/material';
import ChannelCard from '../channels/ChannelCard.js';
// import getUserChannels from '../../api/channels_api.js';

const UserProfile = () => {
  const [channels, setChannels] = React.useState([]);
  const [posts, setUserPosts] = React.useState([]);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      const user = await getUserProfile();
      // const posts = await allUserPosts();
      //SetUserPosts(posts);
      setUser(user);
      // setChannels(getUserChannels());
    };

    getData();
  }, []);

  return (
    <Container>
      {user && (
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <img src={user.image} alt='image' />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' color='initial'>
              {`${user.first_name} ${user.last_name}`}
            </Typography>
            <Typography variant='body1' color='initial'>
              {user.username}
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container>
        <Paper>
          {channels &&
            channels.length > 0 &&
            channels.Map((channel) => {
              <ChannelCard channel={channel} />;
            })}
        </Paper>
      </Grid>
    </Container>
  );
};

export default UserProfile;
