var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var port = process.env.PORT || 3000;

var app = express();
var compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Server listening on: ' + port);
});
