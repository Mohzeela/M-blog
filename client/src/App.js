import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return <div className="container">
    <h1 className="display-4">Create Post</h1>
    <PostCreate />
    <hr/>
    <PostList />
  </div>
};
