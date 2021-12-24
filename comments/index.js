const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const comments = {};

app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  commentList = comments[postId] || [];
  res.send(commentList);
});

// comment structure commentId,username, comment 
app.post('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  const { username, comment } = req.body;
  const commentId = randomBytes(3).toString('hex');
  const load = {
    id: commentId,
    username: username,
    comment: comment
  }
  const postComments = comments[postId] || [];
  postComments.push(load);
  comments[postId] = postComments;
  res.send('Ok')
});

app.listen(4001, () => {
 console.log('server is running on port 4001')
});