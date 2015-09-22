var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {

    context: path.join(__dirname,'src'),

    devtool: 'eval',

    entry: {
       app    : [ './app-entry.jsx' ,'webpack-hot-middleware/client' ]
    },

    output:
    {
        path: path.join(__dirname,'build'),
        filename: './js/[name].js',
        publicPath: ''
    },

    plugins:
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./styles/[name].css')
    ],

    module:
    {
        loaders:
        [
            {
              test: /\.jsx$/,
              loaders: ['babel'],
              include: path.join(__dirname, 'src')
            },
            {
              test: /\.(png|jpg|jpeg)$/,
              loader : "file?name=[path][name].[ext]"
            },
            {
                test: /\.html$/,
                loader : "file?name=[name].[ext]"
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
              test: /\.sass$/,
              loader: ExtractTextPlugin.extract('style', 'css!sass-loader')
            }
        ]
    }
};
