const express = require('express');
const path = require('path');
const bowling = require('./router/bowlingRouter.js');

const port = 3000;

const app = express();
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use('/bowling', bowling);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error connecting to port ${port}`);
  } else {
    console.log(`App is listening on port ${port}`);
  }
});


