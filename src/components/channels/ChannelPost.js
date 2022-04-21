import React from 'react';
import { allChannelPosts } from '../../api/channels_api.js';

// cant get endpoint to work - think i need authorization token
const Post = () => {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const post = await allChannelPosts();
      setPost(post);
    };

    getData();
  }, []);

  return <div>Post</div>;
};

export default Post;
