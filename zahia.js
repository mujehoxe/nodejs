const fs = require('fs');
const express = require('express');
const app = express();

const port = 4000;
app.use(express.urlencoded({extended: true}));

var users = [
  {id: 1, username: 'ahmed', email: 'ahmed@ghldsk.dkg', age: 25},
  {id: 2, username: 'mostapha', email: 'mostapha@ghldsk.dkg', age: 31},
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/users', (req, res) => {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(__dirname);
  res.sendFile(__dirname + '/zahia.json');
  // res.end(JSON.stringify(users));
});

app.get('/favicon.ico', (req, res) => {
  res.writeHead(200, {'Content-Type': 'image/png'});
  var img = fs.readFileSync('./black.png');

  res.end(img, 'binary');
});

app.get('/add', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/add.html');
});

app.post('/add', (req, res) => {
  console.log(req.body);
  res.send();
});

app.post('/users', (req, res) => {
  console.log(req.body);
  // users.push(req.body);
  fs.readFile('zahia.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
  res.send('hellooooo');
});
