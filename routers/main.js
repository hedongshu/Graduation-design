var express = require('express');
var router = express.Router();
var contents = require('../models/contents');
var classify = require('../models/classify');
var user = require('../models/user');
var marked = require('marked');

//设置通用数据
var data;

router.use(function (req, res, next) {
    

    data = {
        userInfo: req.userInfo,
    };
    classify.find().then(function(i){
        data.classify=i;
        
    })
    next();
})
//首页
router.get('/', function (req, res) {

    data.classifyId = req.query.class || '';
    var id = {};
    if(req.query.class){
        id= {
            _classify: req.query.class
        }
    }
    contents.find(id).populate("_classify").sort({addTime:-1}).then(function (contentsList) {
        data.contentsList = contentsList;
        res.render('main/index', data);
    })
})

//文章详情
router.get('/view',function(req,res){
    var id = req.query.id;
    contents.findOne({
        _id: id
    }).then(function(info){

        //阅读量加1
        info.reads++;
        info.save();

        var html = marked(info.content);
                
        data.contents = info;
        data.html = html;
        console.log(data);
        res.render('main/view',data);
    })
})

//添加评论
router.post('/view',function(req,res){
    var id = req.body.id;
    var text = {
        "text": req.body.comText,
        "time": new Date(),
        "username": req.userInfo.username
    }
    contents.findOne({
        _id: id
    }).then(function(content){
        content.comment.push(text);
        return content.save();
    }).then(function(newCom){
        res.json('添加成功');
    });
})

module.exports = router;