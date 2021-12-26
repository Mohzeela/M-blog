const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const events = [];

app.get('/query', (req, res) => {
  res.send(events);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'postCreated') {
    events.push({
      data,
    });
  }
  if (type === 'commentCreated') {
    const postATH = events.forEach((element) => {
      element.data.id[data.postId];
    });
    postATH.comments.push(data.comment);
    console.log(postATH);
  }

  console.log(events);
  res.send({});
});

app.listen(4002, () => {
  console.log('Server is running on port 4002');
});
