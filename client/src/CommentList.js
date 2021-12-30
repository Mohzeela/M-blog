import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchList = async () => {
    const res = await axios.get(
      `http://localhost:4002/query/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const renderList = comments.map((comment) => {
    //console.log(comment.comment);
    if (comment.status == 'comment removed') {
      return <li key={comment.id}>{comment.status}</li>;
    }
    if (comment.status == 'comment approved') {
      return <li key={comment.id}>{comment.comment}</li>;
    } else {
      return <li key={comment.id}>{comment.status}</li>;
    }
  });

  return <ul>{renderList}</ul>;
};
