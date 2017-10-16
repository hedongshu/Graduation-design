var express = require('express');
var nunjucks = require('nunjucks');
var bodyPress = require('express');
var Cookies = require('cookies');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//配置nunjucks模板引擎
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    //关闭缓存,更改html内容后不需要重启服务器就能看到了
    noCache: true
});
//更改模板引擎文件默认后缀名
app.set('view engine', 'html')

//托管静态资源
app.use('/public', express.static('public'));

//body-parser设置
// 如果设为false,键值对中的值就默认为'String'或'Array'形式，但是往mongodb里面存数据时_id是ObjectId类型的,存不进去。设为true就能存进去了
app.use(bodyParser.urlencoded({
    extended: true
}));

//设置cookie
app.use(function (req, res, next) {
    req.cookies = new Cookies(req, res);
    if(req.cookies.get('userInfo')){
        //因为在大部分页面都需要用到这个用户信息userInfo，所以把它复制到req.userInfo，在其他地方也能使用
        req.userInfo = JSON.parse(req.cookies.get('userInfo'));
    }
    next();
})


//根据不同功能划分模块
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));

//设置mongoose
mongoose.connect('mongodb://localhost:27017/blog', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功!');
        app.listen(8080);
        console.log('listen:8080');
    }
});