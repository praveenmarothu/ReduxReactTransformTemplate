var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var devconfig = require('./webpack.config.dev');

module.exports = {

    context : path.join(__dirname,'src'),
    devtool : 'source-map',
    entry   : devconfig.entry,
    output  : devconfig.output,


    plugins:
    [
        new ExtractTextPlugin('./styles/[name].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({  'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
        new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } })
    ],
    module:
    {
        loaders:devconfig.module.loaders
    }
};
