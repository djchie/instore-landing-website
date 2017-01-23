// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     './src/index'
//   ],
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//     publicPath: '/public/'
//   },
//   plugins: [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       minimize: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production')
//       }
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         'HOST_ENV': '"web"'
//       }
//     })
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
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
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
