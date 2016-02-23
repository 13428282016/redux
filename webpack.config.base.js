/**
 * Created by wmj on 2016/1/30.
 */

/**
 * Created by wmj on 2016/1/30.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    context:path.join(__dirname,'public/assets/build/js'),
    //devtool:'cheap-module-eval-source-map',//可以在浏览器查看未合并的源代码
    entry: {
        app:['./business01/app'],
        news:['./business02/news'],
    },
    output: {
        path: path.join(__dirname, 'public/assets/build/js/bundles'),

    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            constant:path.join(__dirname, 'public/assets/build/js/constants'),
            reducer:path.join(__dirname, 'public/assets/build/js/reducers'),
            action:path.join(__dirname, 'public/assets/build/js/actions'),
            store:path.join(__dirname, 'public/assets/build/js/stores'),
            component:path.join(__dirname, 'public/assets/build/js/components'),
            container:path.join(__dirname, 'public/assets/build/js/containers'),
            middleware:path.join(__dirname, 'public/assets/build/js/middlewares'),
            clib:path.join(__dirname, 'public/assets/build/js/clib'),
        }

    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),//限定chunk的最多数量
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),//限定每个chunk的小字节
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),//所有模块都会引入jquery 即 访问$,jQuery,window.jQuery,会被编译成require('jquery');

    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'react-hot!babel?presets[]=react,presets[]=es2015',
            exclude: /node_modules/,//避免不必要的加载
        },{
            test:/\.js$/,
            loaders:['babel?presets[]=es2015'],
            exclude:/node_modules/,
            include:path.join(__dirname, 'public/assets/build/js'),

        }]
    }
}



