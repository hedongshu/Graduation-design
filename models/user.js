var mongoose = require('mongoose');

//用户表结构
//创建一个schema 设计表结构
var userSchema = mongoose.Schema({

    //用户名
    username:String,

    //密码
    password:String,
    
    //是否是管理员
    isAdmin:{
        //类型布尔,默认false
        type:Boolean,
        default: false
    }
})
//以userSchema创建了一个model  并且暴露出去  ,之后直接操作这个model就可以了
module.exports = mongoose.model('user',userSchema);