/**
 * Created by wmj on 2016/1/30.
 */

/**
 * Created by wmj on 2016/1/30.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    context:path.join(__dirname,'js'),
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app'
    ],
    output: {
        path: path.join(__dirname, 'bundles'),
        filename: '[name].bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel'],
            exclude: /node_modules/,
        }]
    }
}



