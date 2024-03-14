const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 8001;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/oumaima.json');
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  fs.readFile('oumaima.json', {encoding: 'utf8'}, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const users = JSON.parse(data);
    newUser.id = users.length + 1;
    newUser.age = parseInt(newUser.age);
    users.push(newUser);
    fs.writeFile('oumaima.json', JSON.stringify(users), err => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }
      res.send(newUser);
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*app.get('/users', (req, res) => {
 // res.writeHead(200, {'Content-Type': 'application/json'});

 // res.end(JSON.stringify(users));
//});*/

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
});

app.get('/users/:id', (req, res) => {
  console.log(req.params);

  fs.readFile('oumaima.json', {encoding: 'utf8'}, function (err, data) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    const users = JSON.parse(data);

    for (let i = 0; i < users.length; i++) {
      if (users[i].id == parseInt(req.params.id)) {
        res.send(users[i]);
        return;
      }
    }

    res.sendStatus(404);
  });
});

app.get('/user', function (req, res) {
  let data = '';
  try {
    data = fs.readFileSync('oumaima.json', {encoding: 'utf8'});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }

  const users = JSON.parse(data);
  const foundUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (
      req.query.username == users[i].username &&
      req.query.age == users[i].age
    ) {
      foundUsers.push(users[i]);
    } else if (!req.query.username && req.query.age == users[i].age) {
      foundUsers.push(users[i]);
    } else if (!req.query.age && req.query.username == users[i].username) {
      foundUsers.push(users[i]);
    }
  }

  if (foundUsers.length == 0) {
    res.sendStatus(404);
  } else {
    res.send(foundUsers);
  }
});

app.get('/rangeage', function (req, res) {
  req.query.ageStart = parseInt(req.query.ageStart);
  req.query.ageEnd = parseInt(req.query.ageEnd);
  if (req.query.ageStart <= req.query.ageEnd) {
    fs.readFile('oumaima.json', {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      const users = JSON.parse(data);
      var foundUsers = [];
      for (let i = 0; i < users.length; i++) {
        if (
          req.query.ageStart <= users[i].age &&
          users[i].age <= req.query.ageEnd
        ) {
          foundUsers.push(users[i]);
        } else if (!req.query.ageEnd && req.query.ageStart <= users[i].age) {
          foundUsers.push(users[i]);
        } else if (!req.query.ageStart && users[i].age <= req.query.ageEnd) {
          foundUsers.push(users[i]);
        }
      }

      if (foundUsers.length == 0) res.sendStatus(404);
      else res.send(foundUsers);
    });
  } else res.status(400).send('ageStart should be less then ageEnd');
});
