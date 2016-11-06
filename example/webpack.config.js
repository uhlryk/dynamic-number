var webpack = require('webpack');
module.exports = {
  entry: {
    dynamicNumber: './example/src.js'
  },
  output: {
    filename: './example/app.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          compact: true
        }
      }
    ]
  },
  plugins: [

  ],
  devtool: 'source-map'
};
