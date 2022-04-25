import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  cardStyle: {
    height: 'auto',
    minHeight: '250px',
    maxHeight: '350px',
    width: '100%',
    maxWidth: '350px',
    marginBottom: '20px',
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

function PostCard({ post }) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 200 }} key={post.id} className={classes.cardStyle}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {post.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {post.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;
