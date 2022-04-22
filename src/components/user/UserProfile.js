import React from 'react';
import { allUserPosts, getUserProfile } from '../../api/auth_api.js';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../../UserAuth/auth.js';
import { Container, Paper, Grid, Card, Typography } from '@mui/material';
import ChannelCard from '../channels/ChannelCard.js';

const UserProfile = () => {
  const [channels, setChannels] = React.useState([]);
  const [posts, SetUserPosts] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const user = await getUserProfile();
      // const posts = await allUserPosts();
      //SetUserPosts(posts);
      setChannels(getUserChannels());
    };

    getData();
  }, []);

  return (
    <Container>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          User Profile
        </Grid>
        <Grid item xs={12}>
          User Profile Image
        </Grid>
      </Grid>
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
