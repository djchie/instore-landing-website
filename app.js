var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
 
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
}).listen(port, function () {
  console.log('Server listening on: ' + port);
});