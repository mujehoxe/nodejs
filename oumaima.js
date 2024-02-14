const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 8000;

var users = [
  {id: 1, username: 'ahmed', email: 'ahmed@ghldsk.dkg', age: 25},
  {id: 2, username: 'mostapha', email: 'mostapha@ghldsk.dkg', age: 31},
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/oumaima.json');
  //res.sendFile(__dirname + '/index.html');
});

app.post('/users', (req, res) => {
  console.log(req.body);
  fs.readFile('oumaima.json', {encoding: 'utf8'}, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log('***', data);
  });
  // users.push(req.body);
  // console.log(users);
  res.sendStatus(200);
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
