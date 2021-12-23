const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//post is an object of title and postId
const posts = {};

app.get('/posts', (req, res) => {
  res.status(201).send(posts)
});

app.post('/posts', (req, res) => {
  const postId = randomBytes(4).toString('hex');
  const { title } = req.body;

  res.send(posts[postId] = {
    id: postId,
    title
  });

});

app.listen(4000, () => {
  console.log('server is running on port 4000...');
})