var express = require('express');
var router = express.Router() ;

router.use(function(){
    
})

router.get('/',function(req,res,next){
    res.render('main/index');
})
module.exports = router;