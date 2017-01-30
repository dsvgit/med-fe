var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var autoreset = require('postcss-autoreset');
var initial = require('postcss-initial');
var relPath = require('../utils/relPath');


module.exports = {
  resolve: {
    alias: {
      'src': relPath('', 'home'),
      'appSettings': relPath('/config.js', 'build'),
      'framework-validator': relPath('/services/validator', 'common'),
      'framework-moment': relPath('/services/moment', 'common')
    }
  },
  entry: {
    'admin/login': './src/login/app/index.js',
    'admin': './src/admin/app/index.js',
    'client/login': './src/login/app/index.js',
    'client': './src/client/app/index.js'
  },
  output: {
    path: './build',
    filename: '[name]/index.[hash].js',
    chunkFilename: '[name]/index.[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name]/index.css'),
    new HtmlWebpackPlugin({
      filename: 'admin/login/index.html',
      chunks: ['admin/login'],
      template: './src/admin/app/login.ejs',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'admin/index.html',
      chunks: ['admin'],
      template: './src/admin/app/index.ejs',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'client/login/index.html',
      chunks: ['client/login'],
      template: './src/client/app/login.ejs',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'client/index.html',
      chunks: ['client'],
      template: './src/client/app/index.ejs',
      inject: true
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style?singleton', 'css')
      },
      {
        test: /\.less$/i,
        loader: ExtractTextPlugin.extract('style?singleton',
          'css?sourceMap?modules&camelCase=dashes&importLoaders=1&localIdentName=[local]-[hash:base64:5]!postcss!resolve-url!less?sourceMap')
      },
      {
        test: /\.sass$/i,
        loader: ExtractTextPlugin.extract('style?singleton',
          'css?sourceMap?modules&camelCase=dashes&importLoaders=1&localIdentName=[local]-[hash:base64:5]!postcss!resolve-url!sass?sourceMap')
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract('style?singleton',
          'css?sourceMap?modules&camelCase=dashes&importLoaders=1&localIdentName=[local]-[hash:base64:5]!postcss!resolve-url!sass?sourceMap')
      },
      {
        test: /\.(js|jsx|es6)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: [
            'transform-runtime',
            'add-module-exports',
            'transform-decorators-legacy',
            'transform-class-properties',
            ['transform-es2015-classes', {loose: true}]],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/i,
        loader: 'json'
      },
      {
        test: /\.html$/i,
        loader: 'html?attrs[]=img:src'
      },
      {
        test: /\.(jpg|jpeg|gif)$/i,
        loader: 'file?name=/assets/[sha512:hash:base64:7].[ext]'
      },
      {
        test: /\.(png)$/i,
        loader: 'file?name=/assets/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|otf)(\?.+)?$/i,
        loaders: [
          'file?name=/assets/[sha512:hash:base64:7].[ext]'
        ]
      },
      {
        test: /\.woff(2)?(\?\S*)?$/i,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    }),
    initial
  ],
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8081,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  devtool: "eval-source-map"
};
