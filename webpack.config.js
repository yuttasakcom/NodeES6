const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  target: 'node',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'stage-2',
            'env',
            { plugins: ['transform-class-properties'] }
          ]
        }
      }
    ]
  },
  externals: webpackNodeExternals()
}
