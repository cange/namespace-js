const path = require('path')
const pkg = require('./package.json')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    namespace: path.resolve(__dirname, 'src/namespace.js')
  },
  output: {
    filename: 'namespace.js',
    library: 'Namespace',
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      hash: true,
      template: path.resolve(__dirname, 'src/demo.tmpl.html'),
      filename:path.resolve(__dirname, 'dist/demo.html')
    }),
    new webpack.BannerPlugin({
      banner: `${pkg.name} v${pkg.version} ${pkg.homepage}\nlicense ${pkg.license}`
    })
  ]
}
