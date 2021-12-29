const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const {
    type,
    data: { comment, status, postId, id },
  } = req.body;

  if (type === 'commentCreated' && status === 'awaiting moderation') {
    setTimeout(async () => {
      if (comment.includes('knife') || comment.includes('gun')) {
        await axios.post('http://localhost:4005/events', {
          type: type,
          data: {
            id: id,
            comment: comment,
            postId: postId,
            status: 'comment was deleted',
          },
        });
      }
    }, 6000);
  }

  if (type === 'commentCreated' && status === 'awaiting moderation') {
    setTimeout(async () => {
      if (!comment.includes('gun') && !comment.includes('knife')) {
        axios.post('http://localhost:4005/events', {
          type: type,
          data: {
            id: id,
            comment: comment,
            postId: postId,
            status: 'comment approved',
          },
        });
      }
    }, 6000);
  }
  res.send({});
});

app.listen(4004, () => {
  console.log('Server is listening on port 4004..');
});
