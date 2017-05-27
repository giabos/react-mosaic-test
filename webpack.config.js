var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.css?$/,
    "loader": "style-loader!css-loader"
  },
  {
    "test": /\.tsx?$/,
    "loader": "ts-loader",
    "options": {
      "transpileOnly": true,
      "isolatedModules": true,
      "silent": true,
      "files": [
        "just-a-hack"
      ],
      "entryFileIsJs": true,
      "compilerOptions": {
        "jsx": "react",
        "noImplicitAny": false,
        "removeComments": false,
        "target": "es5",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
      }
    }
  },
  {
    "test": /\.less?$/,
    "loader": "style-loader!css-loader!less-loader"
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('build'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.tpl.html'),
      filename: 'index.html',
      inject: false
    })
  ],
  module: {
    loaders: loaders
  }
};
