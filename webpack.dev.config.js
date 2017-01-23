// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     './src/index'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//   ],
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['react-hot', 'babel'],
//       include: path.join(__dirname, 'src')
//     },
//     {
//       test: /\.css$/,
//       loader: 'style!css!',
//     }
//     ]
//   }
// };

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: 'style!css!',
    }
    ]
  }
};
