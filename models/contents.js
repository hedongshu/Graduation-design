var mongoose = require('mongoose');

//内容表结构
//创建一个schema 设计表结构
var contentsSchema = mongoose.Schema({
    //标题
    title:String,

    //添加时间
    addTime:{
        type:Data,
        default:new Data()
    },

    //阅读量
    reads:{
        type:String,
        defaule:1
    },

    //简介
    synopsis:{
        type:String,
        defule:''
    },

    //内容
    content:{
        type:String,
        defule:''
    },

    //评论
    comment:{
        type:Array,
        defule:[]
    }
});
//以contentsSchema创建了一个model  并且暴露出去  ,之后直接操作这个model就可以了
module.exports = mongoose.model('contents',contentsSchema);