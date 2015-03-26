var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  console.log("GET");
  res.send('Hello Helsinki!\nIt finally works! :D');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
