import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Paper, Grid, Link } from '@mui/material';
import ChannelCard from './ChannelCard';

function ChannelList({ channels }) {
  return (
    <Grid container spacing={4}>
      {channels &&
        channels.length > 0 &&
        channels.map((channel) => (
          <Grid item key={channel.id}>
            <Link href={`/channel/${channel.urlname}`}>
              <ChannelCard spacing={5} channel={channel} />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}

export default ChannelList;
