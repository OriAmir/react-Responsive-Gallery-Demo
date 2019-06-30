const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none',
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }, {
      test: /\.module\.s(a|c)ss$/,
      loader: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            camelCase: true,
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    },
    {
      test: /^(?!.*?\.module).*\.scss$/,
      use: [
        'style-loader', 'css-loader', 'sass-loader'
      ]
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Production',
      filename: 'index.html', // target html
      template: './src/public/index.html' // source html
    })
  ]
};
