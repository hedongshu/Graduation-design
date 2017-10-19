var mongoose = require('mongoose');

//用户表结构
//创建一个schema 设计表结构
var classifySchema = mongoose.Schema({

    classname: String
    
})
//以classifySchema创建了一个model  并且暴露出去  ,之后直接操作这个model就可以了
module.exports = mongoose.model('classify',classifySchema);