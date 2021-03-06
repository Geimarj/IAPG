/**
 * Created by student1 on 4/18/2016.
 */
// dev.js
var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var publicPath = '/assets/';

var baseConfig = require('./base');

var config = _.merge({
    output: {
        path: path.join(__dirname, '/../dist/assets'),
        filename: 'app.js',
        publicPath: publicPath
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000',
        'webpack/hot/only-dev-server',
        './src/components/run'
    ],
    debug: true,
    cache: true,
    devtool: 'eval',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'react-hot!babel-loader',
    exclude: /(node_modules|bower_components)/
});

module.exports = config;