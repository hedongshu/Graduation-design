var express = require('express');
var router = express.Router() ;

var data; 

//设置通用数据
router.use(function(req,res,next){
    data = {
        userInfo: req.userInfo,
    };
    next();
})

router.get('/',function(req,res){
    res.render('main/index',data);
})
module.exports = router;