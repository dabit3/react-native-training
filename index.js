const express = require('express');

const app = express();
const port = 8080;

// allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  console.log(req.url);
  next();
});

// send all requests to /static to /static
app.use('/static', express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// send all requests to index.html
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
}); // I am awesome


app.listen(process.env.PORT || port, function() {
  console.log('server listening on port ' + port);
});
