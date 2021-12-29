const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const events = {};

app.get('/query', (req, res) => {
  res.send(events);
  console.log(events);
});

app.get('/query/:id/comments', (req, res) => {
  const postId = req.params.id;
  let commentList = events[postId].comments;
  res.send(commentList);
  console.log(commentList);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'postCreated') {
    events[data.id] = data;
  }
  if (type === 'commentCreated') {
    const { id, comment, status } = data;
    events[data.postId].comments.push({ id, comment, status });
  }

  res.send({});
  console.log(events);
});

app.listen(4002, () => {
  console.log('Server is running on port 4002');
});
