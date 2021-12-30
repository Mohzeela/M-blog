import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get('http://localhost:4002/query');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderPost = Object.values(posts).map((post) => {
    return (
      <div
        className="card bg-light mb-3"
        style={{ width: '20rem', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h5 className="card-title">{post.content}</h5>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPost}
    </div>
  );
};
