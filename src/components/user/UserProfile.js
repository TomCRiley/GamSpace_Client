import React from 'react';
import { allUserPosts, getUserProfile } from '../../api/auth_api.js';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUserId } from '../../UserAuth/auth.js';
import { Container, Paper, Grid, Card, Typography } from '@mui/material';
import ChannelCard from '../channels/ChannelCard.js';
import { makeStyles } from '@mui/styles';
// import getUserChannels from '../../api/channels_api.js';

// const useStyles = makeStyles(() => ({
//   root: {
//     width: 316,
//     alignItems: 'center',
//   },
//   heroImage: {
//     minHeight: 150,
//     height: 300,
//     backgroundSize: 'Cover',
//     borderRadius: 20,
//     margin: 20,
//     marginRight: '9%',
//   },
//   heroText: {
//     marginBottom: 12,
//     padding: 40,
//     color: '#fff',
//   },
//   descBox: {
//     backgroundColor: '#E6E6E6',
//     borderRadius: 10,
//     padding: 20,
//     paddingBottom: 60,
//   },
//   channelDescTitle: {
//     fontStyle: 'italic',
//     fontSize: 35,
//     marginBottom: 15,
//   },
//   postColumn: {
//     marginLeft: 30,
//   },
// }));

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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img src={user.image} alt='image' />
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='initial'>
                {`${user.first_name} ${user.last_name}`}
              </Typography>
              <Typography variant='body1' color='initial'>
                {user.username}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Paper>
        {channels &&
          channels.length > 0 &&
          channels.Map((channel) => {
            <ChannelCard channel={channel} />;
          })}
      </Paper>
    </Container>
  );
};

export default UserProfile;
