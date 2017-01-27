// var path = require('path');
// var webpack = require('webpack');
// var express = require('express');
// var config = require('./webpack.prod.config');
// var port = process.env.PORT || 3000;
//
// var app = express();
// var compiler = webpack(config);
//
// if (process.env.NODE_ENV !== 'production') {
//   app.use(require('webpack-dev-middleware')(compiler, {
//     publicPath: config.output.publicPath
//   }));
//
//   app.use(require('webpack-hot-middleware')(compiler));
// }
//
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
//
// app.listen(port, function(err) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log('Server listening on: ' + port);
// });

const Server = require('./server.js');
const port = (process.env.PORT || 8080);
const app = Server.app();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.dev.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
