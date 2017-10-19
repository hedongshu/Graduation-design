var express = require('express');
var router = express.Router();
var user = require('../models/user');
var classify = require('../models/classify');
var contents = require('../models/contents')



router.get('/', function (req, res, next) {
    res.render('admin/index');
})

//用户管理
router.get('/userControl', function (req, res, next) {

    //设置数据
    var count = 0;
    //每页显示的数量
    var num = 10;
    var pages = 0;
    //当前页
    var page = req.query.page || 1;
    var skip = Math.max((page - 1) * num, 0);

    user.count().then(function (c) {
        //总页数
        count = c;
        pages = Math.max(count / num, 1);
    })
    user.find().limit(num).skip(skip).then(function (userlist) {
        //page不能比1小
        page = Math.max(page, 1);
        //page不能比总页数大
        page = Math.min(page, Math.ceil(count / num));
        res.render('admin/userControl', {
            num: num,
            userlist: userlist,
            count: count,
            page: page,
            pages: pages
        });
    })

})
//修改用户密码
router.post('/changeword', function (req, res, next) {
    user.update({
        _id: req.body.id
    }, {
        password: req.body.newPassword
    }).exec().then(function (i) {
        res.json('修改成功！');
    })
})
//删除用户数据
router.post('/removeuser', function (req, res, next) {
    user.remove({
        _id: req.body.id
    }).exec().then(function(i){
        res.json('删除成功！')
    })
})

//分类管理
//所有分类
router.get('/allClass', function (req, res, next) {
    classify.find().then(function (classList) {
        res.render('admin/allClass', {
            classList: classList
        });
    })
})
//修改分类名
router.post('/changeClass', function (req, res, next) {
    classify.update({
        _id: req.body.id
    }, {
        classname: req.body.name
    }).exec().then(function (i) {
        res.json('修改成功！');
    })
})
//添加分类
router.get('/addClass', function (req, res, next) {
    res.render('admin/addClass');
})
router.post('/addClass', function (req, res, next) {
    var newClassify = new classify({
        classname: req.body.classname
    });
    newClassify.save();
    res.json('添加成功');
})
//删除分类
router.post('/removeClass', function (req, res, next) {
    classify.remove({
        _id: req.body.id
    }).exec().then(function(i){
        res.json('删除成功！')
    })
})

//内容管理
//所有文章
router.get('/allContents', function (req, res, next) {
    //设置数据
    var count = 0;
    //每页显示的数量
    var num = 10;
    var pages = 0;
    //当前页
    var page = req.query.page || 1;
    var skip = Math.max((page - 1) * num, 0);
    
    contents.count().then(function (c) {
        //总页数
        count = c;
        pages = Math.max(count / num, 1);
    })
    contents.find().limit(num).skip(skip).populate('_classify').sort({addTime:-1}).then(function (contentslist) {
        //page不能比1小
        page = Math.max(page, 1);
        //page不能比总页数大
        page = Math.min(page, Math.ceil(count / num));
        res.render('admin/allContents', {
            num: num,
            contentslist: contentslist,
            count: count,
            page: page,
            pages: pages
        });
    })
});
    
//添加文章
router.get('/addContent', function (req, res, next) {
    classify.find().then(function (classList) {
        res.render('admin/addContent', {
            classList: classList
        });
    })
});
router.post('/addContent', function (req, res, next) {
    var user=req.userInfo.username;
    var newContents = new contents({
        user: user,
        _classify: req.body.classify,
        title: req.body.title,
        synopsis: req.body.synopsis,
        content: req.body.content
    });
    newContents.save();
    res.json('文章添加成功！');
})

//修改文章
router.get('/changeContent',function(req,res,next){
    var classList;
    classify.find().then(function(i){
        classList=i;
    })
    contents.findOne({
        _id:req.query.id
    }).populate('_classify').then(function(info){
        res.render('admin/changeContent',{
            classList: classList,
            info:info
        });
    });
    
});
//保存修改
router.post('/changeSave',function(req,res,next){
    contents.update({ 
        _id: req.body.id
    },{
        title: req.body.title,
        classify: req.body.classify,
        synopsis: req.body.synopsis,
        content: req.body.content,
    }).then(function(){
        res.json('修改成功！')
    })
})

module.exports = router;