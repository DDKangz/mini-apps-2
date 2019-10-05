const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/bitcoinPrice', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then(data => res.status(200).send(data.data.bpi))
  .catch(err => res.status(500).send(err.stack));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});