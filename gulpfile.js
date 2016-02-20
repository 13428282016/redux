/**
 * Created by wmj on 2016/1/30.
 */


var gulp = require('gulp');

var connect=require('gulp-connect');
gulp.task('server:assets', function () {


    var webpackDevServer = require('webpack-dev-server');
    var webpackDevConfig = require('./webpack.config.dev.js');
    var webpack = require('webpack');
    new webpackDevServer(webpack(webpackDevConfig), {
        publicPath: webpackDevConfig.output.publicPath,//把wenpack的bundle文件都放在这个路径下，服务器绑定的硬盘目录是隐式绑定的，不需要自己自定，webpackAdminConfig.output.publicPath和服务器监听的域名要一致
        hot: true,
        quiet: false,
        historyApiFallback: true,
        noInfo: false,
        stats: {color: true}
    }).listen(80, 't.assets.test.com', function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log('Listening at t.assets.test.com:80');
        })


});


gulp.task('build:js', function () {
    var webpackProductionConfig = require('./webpack.config.production.js');
    var webpack = require('webpack');
    var uglify = require('gulp-uglify'),
        sourceMaps = require('gulp-sourcemaps'),
        rename=require('gulp-rename');
    webpack(webpackProductionConfig, function (err, stat) {

        if (err) {
            console.log(err);
            return;
        }
        gulp.src(['build/js/bundles/**/*.js'])
            .pipe(sourceMaps.init())
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(sourceMaps.write('source_maps'))
            .pipe(gulp.dest('dist/js/bundles'));
    });

});


gulp.task('server:web',function(){


    //webpack-dev-server和这个server端口一样时liverreload无效
    connect.server({
        port:8080,
        root:'./www',
        host:'dev.com',
        livereload:true,



    });



});


gulp.task('watch:html',function(){

    gulp.watch(['./www/*.html'],function(event){
          if(event.type==='changed'){

              gulp.src(event.path)
              .pipe(   connect.reload());

          }

    })

});
gulp.task('server:web-reload',['server:web','watch:html']);


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