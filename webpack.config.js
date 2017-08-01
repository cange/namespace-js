var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/namespace.js',
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'namespace.min.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js?$/,
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },
  devtool: 'cheap-module-inline-source-map'
}

