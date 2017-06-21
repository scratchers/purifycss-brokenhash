const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
  entry: {
    main: [
      './css/main.css',
    ],
  },
  output: {
      path: __dirname + '/dist',
      filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[contenthash].css'),
    new PurifyCSSPlugin({
      paths: ['html/index.html'],
    })
  ]
};
