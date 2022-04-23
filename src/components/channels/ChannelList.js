import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Paper, Grid, Link } from '@mui/material';
import ChannelCard from './ChannelCard';

function ChannelList({ channels }) {
  return (
    <Grid container item xs={12}>
      {channels &&
        channels.length > 0 &&
        channels.map((channel) => (
          <Link href={`/channel/${channel.id}`} key={channel.id}>
            <ChannelCard channel={channel} />
          </Link>
        ))}
    </Grid>
  );
}

export default ChannelList;
