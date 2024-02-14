const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 5000;

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

/*app.get('/users', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(users));
});*/

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
  var somme = parseFloat(req.body.first) + parseFloat(req.body.second);
  res.writeHead(200, {'Content-type': 'application/json'});
  res.send({result: somme});
});

app.post('/users', (req, res) => {
  console.log(req.body);
  fs.readFile('rania.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log('***', data);
  });

  users.push(req.body);
  res.send(users);
  console.log(users);
});

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/rania.json');
});
