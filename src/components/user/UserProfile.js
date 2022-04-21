import React from 'react';
import { allUserPosts } from '../../api/auth_api.js';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [posts, SetUserPosts] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const posts = await allUserPosts();
      SetUserPosts(posts);
    };

    getData();
  }, []);

  return (
    <div>
      <div>UserProfile</div>
    </div>
  );
};

export default UserProfile;
