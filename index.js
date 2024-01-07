const http = require('http');
const fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET') {
    handleGetRequests(req, res);
  }
  if (req.method === 'POST') {
    handlePostRequests(req, res);
  }
}

var users = [
  {id: 1, username: 'ahmed', email: 'ahmed@ghldsk.dkg', age: 25},
  {id: 2, username: 'mostapha', email: 'mostapha@ghldsk.dkg', age: 31},
];
function handleGetRequests(req, res) {
  if (req.url === '/') {
    handleGetIndex(res);
  }
  if (req.url === '/favicon.ico') {
    handleGetFavIcon(res);
  }
  if (req.url === '/users') {
    handleGetUsers(res);
  }
}

function handlePostRequests(req, res) {
  if (req.url === '/users') {
    handlePostUser(req, res);
  }
}
const querystring = require('querystring');

function handlePostUser(req, res) {
  var body = '';

  req.on('readable', function () {
    body += req.read();
    var reqbody = querystring.parse(body);
    users.push(reqbody);
    res.end();
  });
}

function handleGetIndex(res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var file = fs.readFileSync('./index.html');

  res.end(file);
}

function handleGetUsers(res) {
  res.writeHead(200, {'Content-Type': 'application/json'});

  res.end(JSON.stringify(users));
}

function handleGetFavIcon(res) {
  res.writeHead(200, {'Content-Type': 'image/png'});
  var img = fs.readFileSync('./black.png');

  res.end(img, 'binary');
}

server.listen(3000, () => {
  console.log('server is running on 3000');
});
