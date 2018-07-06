const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: __dirname+'/renderer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { attrs: [':data-src'] }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
              loader: 'babel-loader',
              options: { presets: ['react'] }
            }
        ],
      }
    ]
  }
};