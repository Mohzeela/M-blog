import React, { useSate, useState } from 'react';
import axios from 'axios'; 

export default({ postId }) => {
  const [ comment, setComment ] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://127.0.0.1:4001/posts/${postId}/comments`, {comment})
    setComment('');
  }
  
  return <div>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
      <label className="form-label">New comment</label>
      <input value={comment} onChange={e => setComment(e.target.value)} className="form-control" />
      </div>
      <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
    </form>  
  </div>
}

