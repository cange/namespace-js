var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    namespace: './src/namespace.js',
  },
  output: {
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.join(__dirname, 'dist')
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
  }
}
