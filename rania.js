const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 5000;

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
  req.body.age = Number(req.body.age);

  fs.readFile('rania.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    const users = JSON.parse(data);
    req.body.id = users.length + 1;
    users.push(req.body);
    fs.writeFile(
      'rania.json',
      JSON.stringify(users),
      {encoding: 'utf-8'},
      err => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
        res.send(req.body);
      },
    );
  });
});

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/rania.json');
});

app.get('/users/:id', (req, res) => {
  fs.readFile('rania.json', {encoding: 'utf-8'}, function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const users = JSON.parse(data);

    for (var i = 0; i < users.length; i++) {
      if (Number(req.params.id) == users[i].id) {
        res.send(users[i]);
        return;
      }
    }

    res.sendStatus(404);
  });
});

app.get('/user', (req, res) => {
  console.log(req.query);
  fs.readFile('rania.json', {encoding: 'utf-8'}, function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const users = JSON.parse(data);
    const usersbyname = [];

    for (var i = 0; i < users.length; i++) {
      if (req.query.username == users[i].username) {
        usersbyname.push(users[i]);
      }
    }
    if (usersbyname.length != 0) {
      res.send(usersbyname);
    } else {
      res.sendStatus(404);
    }
  });
});
