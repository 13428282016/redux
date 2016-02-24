/**
 * Created by wmj on 2016/2/22.
 */

import express from 'express';

let app=express();

import  webpackDevMiddleware from "webpack-dev-middleware";

import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevConfig from './webpack.config.dev.js';

import webpack from 'webpack';
let compiler = webpack(webpackDevConfig);


app.use(webpackDevMiddleware(compiler,{
    noInfo:true,
    publicPath:'/static/js'//必須要同一個域名

}));
app.use(webpackHotMiddleware(compiler));//修改js的時候不需要刷新就可以熱替換


app.use(express.static('public/assets/dist'));//http://localhost:3000/js/bundles/app.bundle.min.js
app.use('/assets',express.static('public/assets/dist'));//http://localhost:3000/assets/js/bundles/app.bundle.min.js
app.get('/',function(req,res){

   res.send('Hello World!')


});


app.get('/mutil-callback',[(req,res,next)=> {console.log('callback1') ;next()},(req,res,next)=> {console.log('callback2'); next()},(req,res)=> {res.send('callback3')},])


let server =app.listen(3000, function () {

    let host =server.address().address;
    let port=server.address().port;
    console.log('Example app listening at http://${host}:${port}');

});
