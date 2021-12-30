import React, { useState } from 'react';
import axios from 'axios';

export default () => {

  const [title, setTitle] = useState('');

  const eventSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {title});
    setTitle('');
  }

  return <div>
      <form onSubmit={eventSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
          <div className="form-text">Share your story today..</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
}