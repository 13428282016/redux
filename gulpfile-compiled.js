/**
 * Created by wmj on 2016/1/30.
 */

var gulp = require('gulp');

gulp.task('server:assets', function () {

    var webpackDevServer = require('webpack-dev-server');
    var webpackDevConfig = require('./webpack.config.dev.js');
    var webpack = require('webpack');
    new webpackDevServer(webpack(webpackDevConfig), {
        publicPath: webpackDevConfig.output.publicPath, //把wenpack的bundle文件都放在这个路径下，服务器绑定的硬盘目录是隐式绑定的，不需要自己自定，webpackAdminConfig.output.publicPath和服务器监听的域名要一致
        hot: true,
        quiet: false,
        historyApiFallback: true,
        noInfo: false,
        stats: { color: true }
    }).listen(80, 't.assets.test.com', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at t.assets.mj.kankan.com:80');
    });
});

//gulp.task('server:assets',function(){
//    var express=require('express');
//    var app=express();
//    var webpack = require('webpack');
//    var webpackBaseConfig = require('./webpack.config.base');
//    var compiler = webpack(webpackBaseConfig);
//
//    app.use(require("webpack-dev-middleware")(compiler, {
//        noInfo: true, publicPath: webpackBaseConfig.output.publicPath
//    }));
//
//    app.use(require("webpack-hot-middleware")(compiler));
//
//});

//# sourceMappingURL=gulpfile-compiled.js.map