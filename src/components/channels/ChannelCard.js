import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ChannelCard({ channel }) {
  return (
    <Card sx={{ maxWidth: 200 }} key={channel.id}>
      <CardMedia
        component='img'
        alt={channel.name}
        height='65'
        image={channel.image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {channel.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {channel.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ChannelCard;
