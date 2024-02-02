const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
var users = [
  {id: 1, username: 'ahmed', email: 'ahmed@ghldsk.dkg', age: 25},
  {id: 2, username: 'mostapha', email: 'mostapha@ghldsk.dkg', age: 31},
];
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});

  res.end(JSON.stringify(users));
});
app.get('/favicon.ico', (req, res) => {
  res.writeHead(200, {'Content-Type': 'image/png'});
  var img = fs.readFileSync('./black.png');

  res.end(img, 'binary');
});

app.get('/add', (req, res) => {
  console.log(__dirname);
  res.sendFile('add.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
