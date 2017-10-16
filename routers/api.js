var express = require('express');
var router = express.Router();
var user = require('../models/user');

var resData = {
    code: 0,
    message: ''
};

//注册功能
router.post('/user/signin', function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;
    //检查数据库中是否存在该用户
    user.findOne({
        username: username,
    }).then(function (Info) {
        if (Info) {
            //存在
            resData.code = 1;
            resData.message = '用户名已存在!';
            res.json(resData);
        } else {
            //不存在,保存到数据库
            var newUser = new user({
                username: username,
                password: password
            });
            return newUser.save();
        }
    }).then(function (newInfo) {
        resData.message = '注册成功!';
        res.json(resData);
    })

});

//登录功能
router.post('/user/login', function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;
    user.findOne({
        username: username,
        password: password
    }).then(function (Info) {
        if (!Info) {
            resData.code = 1;
            resData.message = '用户名或密码错误!';
            res.json(resData);
        } else {
            resData.message = '登录成功!'
            resData.userInfo = {
                id: Info._id,
                username: Info.username
            };
            res.json(resData);
            return;
        }

    })
})
module.exports = router;