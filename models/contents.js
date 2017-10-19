var mongoose = require('mongoose');

//内容表结构
//创建一个schema 设计表结构
var contentsSchema = mongoose.Schema({
    //关联字段
    //所属分类
    _classify: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classify"
    },
    //作者
    user: String,
    //标题
    title: String,

    //添加时间
    addTime: {
        type: Date,
        default: new Date()
    },

    //阅读量
    reads: {
        type: String,
        default: 1
    },

    //简介
    synopsis: {
        type: String,
        defule: ''
    },

    //内容
    content: {
        type: String,
        defule: ''
    },

    //评论
    comment: {
        type: Array,
        defule: []
    }
});
//以contentsSchema创建了一个model  并且暴露出去  ,之后直接操作这个model就可以了

module.exports = mongoose.model('contents', contentsSchema);