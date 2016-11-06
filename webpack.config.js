var webpack = require('webpack');
module.exports = {
  entry: {
    dynamicNumber: './src/index.js'
  },
  output: {
    libraryTarget: 'umd',
    filename: './release/[name].js'
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
