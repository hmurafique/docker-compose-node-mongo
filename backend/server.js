const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log('DB Error:', err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js + MongoDB app!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
