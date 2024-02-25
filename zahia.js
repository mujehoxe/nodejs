const fs = require('fs');
const express = require('express');
const app = express();

const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var users = [
  {id: 1, username: 'ahmed', email: 'ahmed@ghldsk.dkg', age: 25},
  {id: 2, username: 'mostapha', email: 'mostapha@ghldsk.dkg', age: 31},
];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  // res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(__dirname);
  res.sendFile(__dirname + '/zahia.json');
  // res.end(JSON.stringify(users));
});

app.get('/favicon.ico', (req, res) => {
  res.writeHead(200, {'Content-Type': 'image/png'});
  const img = fs.readFileSync('./black.png');
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
  req.body.age = parseInt(req.body.age);
  fs.readFile('zahia.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const users = JSON.parse(data);
    req.body.id = users.length + 1;
    users.push(req.body);

    fs.writeFile(
      'zahia.json',
      JSON.stringify(users),
      {encoding: 'utf-8'},
      err => {
        if (err) {
          res.sendStatus(500);
          return;
        }
        res.send(req.body);
      },
    );
  });
});

app.get('/users/:id', (req, res) => {
  req.params.id = parseInt(req.params.id);
  console.log(req.params);

  fs.readFile('zahia.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const users = JSON.parse(data);
    for (let i = 0; i < users.length; i++) {
      if (req.params.id == users[i].id) {
        res.send(users[i]);
        return;
      }
    }

    res.sendStatus(404);
  });
});
