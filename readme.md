#  个人博客项目

[TOC]

---

​	最近在尝试自己搭建一个个人的博客，在这里记录一下。

​	一方面为了巩固知识，另一方面也是可以方便给初学者看，作为一个教程吧。

---



## 技术选型

​	前端：jQuery，Bootstrap

​	后端：Node.js

​	数据库：MongoDB

---



## 环境搭建

### Node.js 安装

Node的安装可以说是很简单了 ,  直接去 [官网](http://nodejs.cn/download/) , 然后选择你的操作系统对应的文件下载就ok

我的操作系统是macOS 

![F32FCC72-13BC-4D94-BBE0-E1BC1E46A2E6](/Users/hds/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/Users/1179601966/QQ/Temp.db/F32FCC72-13BC-4D94-BBE0-E1BC1E46A2E6.png)

下载好了打开 ,  然后无脑下一步就好了

安装node的同时 , 会自动帮你安装npm



## 项目创建

### 项目功能介绍

首先这个项目主要功能就是能让你在上面写文章 , 然后分类展示出来 .   其他用户对你的文章有什么看法或者意见 ,可以发表自己的评论 . 

那就还得有个后台管理页面 , 让你可以管理自己写的文章 , 管理其他用户的评论等等

Emmmmm , 大概就这样吧

首先创建好项目的目录

![AED9F6EF-61C9-42F3-B5E0-A9E63572B706](/Users/hds/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/Users/1179601966/QQ/Temp.db/AED9F6EF-61C9-42F3-B5E0-A9E63572B706.png)

这就是开始的目录了 , 后面你就明白这些文件夹是干啥的了

首先在终端进入项目   输入 `npm init`

按照默认设置, 一直回车敲下来 , 然后你会发现你的项目里多出了一个 package.json 文件

那么这个文件是什么呢?

> 直接的说：就是管理你本地安装的npm包 
> 一个package.json文件可以做如下事情：
>
> > 展示项目所依赖的npm包 
> > 允许你指定一个包的版本[范围] 
> > 让你建立起稳定，意味着你可以更好的与其他开发者共享

下面的package文件的配置说明

>这里说的项目广义，比如：我们可以把我们的项目发布成一个npm包
>
>- name: 项目名称
>- version: 项目版本号
>- description: 项目描述
>- keywords: {Array}关键词，便于用户搜索到我们的项目
>- homepage: 项目url主页
>- bugs: 项目问题反馈的Url或email配置，如： 
>  { 
>  “url” : “<https://github.com/owner/project/issues>“, 
>  “email” : “project@hostname.com” 
>  }
>- license: 项目许可证，让使用者知道是如何被允许使用此项目。默认是”ISC”
>- author,contributors: 坐着和贡献者。格式设置如下： 
>  { “name” : “Barney Rubble” 
>  , “email” : “b@rubble.com” 
>  , “url” : “<http://barnyrubble.tumblr.com/>” 
>  }
>- files: 包含在项目中的文件数组。如果在数组里面声明了一个文件夹，那也会包含文件夹中的文件。可以声明一些规则来忽略部分文件。可以在项目根目录或者子目录里声明一个.npmignore。
>
>> Certain files are always included, regardless of settings:
>>
>> > package.json 
>> > README (and its variants) 
>> > CHANGELOG (and its variants) 
>> > LICENSE / LICENCE 
>> > Conversely, some files are always ignored:
>> >
>> > .git 
>> > CVS 
>> > .svn 
>> > .hg 
>> > .lock-wscript 
>> > .wafpickle-N 
>> > *.swp 
>> > .DS_Store 
>> > ._* 
>> > npm-debug.log
>
>- main: 主文件。比如默认是index.js，项目名称叫mymodule。那么require(‘mymodule’)将返回index.js返回的内容
>
>- bin: 项目用到的可执行文件配置
>
>- man: 指定一个单一的文件名或一个文件名数组。意思类似于linux命令中的man 命令，来查看一个命令的用法
>
>   
>
>  ​
>
>  > 如果只给man字段提供一个文件，则安装完毕后，它就是man 的结果，这和此文件名无关 
>  >
>  > > { 
>  > > “name”: “foo”, 
>  > > “version”: “1.2.3”, 
>  > > “description”: “A packaged foo fooer for fooing foos”, 
>  > > “main”: “foo.js”, 
>  > > “man”: “./man/doc.1” 
>  > > } 
>  > > 上面这个配置将会在执行man foo时就会使用./man/doc.1这个文件。
>
>- ## 
>
>如果指定的文件名并未以包名开头，那么它会被冠以前缀，像这样
>
>> { 
>> “name”: “foo”, 
>> “version”: “1.2.3”, 
>> “description”: “A packaged foo fooer for fooing foos”, 
>> “main”: “foo.js”, 
>> “man”: [ 
>> “./man/foo.1”, 
>> “./man/bar.1” 
>> ] 
>> } 
>> 这将会为man foo和man foo-bar创建文件
>
>man文件必须以一个数字结尾，和一个可选的.gz后缀(当它被压缩时)。这个数字说明了这个文件被安装到哪个节中
>
>> { 
>> “name”: “foo”, 
>> “version”: “1.2.3”, 
>> “description”: “A packaged foo fooer for fooing foos”, 
>> “main”: “foo.js”, 
>> “man”: [ 
>> “./man/foo.1”, 
>> “./man/foo.2” 
>> ] 
>> } 
>> 会为使用man foo和man 2 foo而创建
>
>- directories: CommonJS Packages规范说明了几种你可以用directories对象来标示你的包结构的方法
>
>- directories.lib: 告诉你库文件夹的位置，目前没有什么地方需要用到lib文件夹，但是这是重要的元信息
>
>- directories.bin: 如果你在directories.bin中指定一个bin目录，在这个目录中的所有文件都会被当做在bin来使用。
>
>  > 由于bin指令的工作方式，同时指定一个bin路径和设置directories.bin将是一个错误。如果你想指定独立的文件，使用bin，如果想执行某个文件夹里的所有文件，使用directories.bin。
>
>- directories.doc: 把markdown文件放在这。也许某一天这些文件将被漂亮地展示出来，不过这仅仅是也许
>
>- directories.man: directories.man指定的文件夹里都是man文件，系统通过遍历这个文件夹来生成一个man的数组
>
>- directories.example: 把示例脚本放在这。也许某一天会被用到
>
>- repository: 项目代码存放地方
>
>  > “repository” : 
>  > { “type” : “git” 
>  > , “url” : “<https://github.com/npm/npm.git>” 
>  > } 
>  > “repository” : 
>  > { “type” : “svn” 
>  > , “url” : “<https://v8.googlecode.com/svn/trunk/>” 
>  > }
>
>- scripts: 声明一系列npm脚本指令
>
>  > 1. prepublish: 在包发布之前运行，也会在npm install安装到本地时运行
>  > 2. publish,postpublish: 包被发布之后运行
>  > 3. preinstall: 包被安装前运行
>  > 4. install,postinstall: 包被安装后运行
>  > 5. preuninstall,uninstall: 包被卸载前运行
>  > 6. postuninstall: 包被卸载后运行
>  > 7. preversion: bump包版本前运行
>  > 8. postversion: bump包版本后运行
>  > 9. pretest,test,posttest: 通过npm test命令运行
>  > 10. prestop,stop,poststop: 通过npm stop命令运行
>  > 11. prestart,start,poststart: 通过npm start命令运行
>  > 12. prerestart,restart,postrestart: 通过npm restart运行
>
>- config: 配置项目中需要的配置参数：
>
>  > { “name” : “foo” 
>  > , “config” : { “port” : “8080” } 
>  > , “scripts” : { “start” : “node server.js” } } } 
>  > server.js中使用process.env.npm_package_config_port来访问port 
>  > 用户也可以这样修改：npm config set foo:port 80
>
>- dependencies: 项目在生产环境中依赖的包
>
>- devDependencies: 项目在开发和测试环境中依赖的包
>
>- peerDependencies: 在某些情况下，当一个主机无法require依赖包时，你会想要告诉它还有哪些工具或库与这个依赖包兼容。这通常被成为一个插件。尤其是在host文档中声明的模块会暴露一个特定的接口
>
>  > { 
>  > “name”: “tea-latte”, 
>  > “version”: “1.3.5”, 
>  > “peerDependencies”: { 
>  > “tea”: “2.x” 
>  > } 
>  > } 
>  > 这将确保tea-latte这个包只会和2.x版本的tea一起被安装。执行npm install tea-latte可能产生以下关系图： 
>  > ├── tea-latte@1.3.5 
>  > └── tea@2.2.0
>
>- bundledDependencies: {Array}，发布时会被一起打包的模块
>
>- optionalDependencies: 如果一个依赖模块可以被使用， 同时你也希望在该模块找不到或无法获取时npm继续运行，你可以把这个模块依赖放到optionalDependencies配置中。这个配置的写法和dependencies的写法一样，不同的是这里边写的模块安装失败不会导致npm install失败。当然，这种模块就需要你自己在代码中处理模块确实的情况了，例如：
>
>  > try { 
>  > var foo = require(‘foo’) 
>  > var fooVersion = require(‘foo/package.json’).version 
>  > } catch (er) { 
>  > foo = null 
>  > } 
>  > if ( notGoodFooVersion(fooVersion) ) { 
>  > foo = null 
>  > } 
>  > // .. then later in your program .. 
>  > if (foo) { 
>  > foo.doFooThings() 
>  > }
>
>- engines: 声明项目需要的node或npm版本范围
>
>  > { “engines” : { “npm” : “~1.0.20” } } 
>  > { “engines” : { “node” : “>=0.10.3 <0.12” } }
>
>- os: 指定你的项目将运行在什么操作系统上
>
>- cpu: 指定你的项目将运行在什么cpu架构上
>
>- preferGlobal: 如果你的包需要全局安装，通过命令行来运行，那么设置为true。如果这个包被本地安装则会出现一个警告
>
>- private: 如果设置为true, 那么npm会拒绝发布它
>
>- publishConfig

(参考) : http://blog.csdn.net/zmrdlb/article/details/53190696



我们项目需要用到一些node的模块和框架现在一并装上

```
npm install express --save
npm install body-parser --save
npm install cookies --save
npm install mongoose --save
npm install nunjucks --save
```



模块都安装好了之后 , 你可以在package文件里面看到他们

---



### 第一个请求

万里长城始于足下 首先我们来发起第一个请求试试看

```
var express = require('express');
var nunjucks = require('nunjucks');
var bodyPress = require('express');
var cookies = require('cookies');
var mongoose = require('mongoose');
var app = express();

//托管静态资源,直接访问/public目录
app.use('/public',express.static('public'));

//监听8080端口
app.listen(8080);
console.log('listen:8080')
```



在public目录下面创建一个test.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    test!!!!
</body>
</html>
```

现在只需要浏览器访问

`http://localhost:8080/public/test.html`  如果能看到test页面  就说明我们的第一个请求完成



项目中用的模板引擎:  [Nunjuck](http://mozilla.github.io/nunjucks/cn/templating.html)  

在使用模板引擎之前要稍微配置一下

```
//配置nunjucks模板引擎
nunjucks.configure('views',{
    autoescape:true,
    express:app,
    //关闭缓存,更改html内容后不需要重启服务器就能看到了
    noCache:true
});
//更改模板引擎文件默认后缀名
app.set('view engine','html')
```

现在 ,  只要是放在views文件下的html文件都可以用模板渲染了 ,演示一下

首先在app.js里

```
app.get('/',function(req,res){
    res.render('index',{
    	//这里在渲染index.html的同时还传递了一个数据name, 一会儿可以在html页面里面使用
        name:'何东树'
    })
})
```

现在在views下创建index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
	<!-- 这里就直接使用了刚刚传过来的name -->
    <h1>{{ name }} 真的帅气</h1>
</body>
</html>
```

打开浏览器就能看到 "何东树真帅"   ,  这就是模板引擎的作用

### 前端页面样式

自己写个自己觉得好看的页面就好了 , 我个人比较偏爱简洁明了的风格 

先写好 ,  等要渲染的时候就不用在意样式的问题了 只需要专注于内容

![94B3F8B37ACB9ADE026A8A598494B321](/Users/hds/Library/Containers/com.tencent.qq/Data/Library/Caches/Images/94B3F8B37ACB9ADE026A8A598494B321.jpg)



现在根据不同的功能来划分模块

```
//浏览器请求不同路由的时候,加载不同的模块
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));
```

这样就不会把所有的代码都写在app.js 文件里了

##数据库基础操作(MongoDB)

emmmm … 先介绍一下MongoDB

>MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。
>
>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

###安装

就像安装node一样简单   这是[官网](https://www.mongodb.com/download-center#community)  然后按需下载就是了

###基础api

#### 超级用户相关

​         1. #进入数据库admin

​	`use admin`

​         2. #增加或修改用户密码

​          `db.addUser('name','pwd')`

​         3. #查看用户列表

​         ` db.system.users.find()`

​         4. #用户认证

​         ` db.auth('name','pwd')`

​         5. #删除用户

​         ` db.removeUser('name')`

​         6. #查看所有用户

​         ` show users`

​         7. #查看所有数据库

​       `   show dbs`

​         8. #查看所有的collection

​         ` show collections`

​         9. #查看各collection的状态

​        `  db.printCollectionStats()`

​        10. #查看主从复制状态

​      `    db.printReplicationInfo()`

​        11. #修复数据库

​         ` db.repairDatabase()`

​        12. #设置记录profiling，0=off 1=slow 2=all

​         ` db.setProfilingLevel(1)`

​        13. #查看profiling

​         ` show profile`

​        14. #拷贝数据库

​          `db.copyDatabase('mail_addr','mail_addr_tmp')`

​        15. #删除collection

​         ` db.mail_addr.drop()`

​        16. #删除当前的数据库

​          `db.dropDatabase()`

​       

#### 增删改

​         1. #存储嵌套的对象

db.foo.save({'name':'ysz','address':{'city':'beijing','post':100096},'phone':[138,139]})

​         2. #存储数组对象

db.user_addr.save({'Uid':'yushunzhi@sohu.com','Al':['test-1@sohu.com','test-2@sohu.com']})

​         3. #根据query条件修改，如果不存在则插入，允许修改多条记录

​            db.foo.update({'yy':5},{'$set':{'xx':2}},upsert=true,multi=true)

​         4. #删除yy=5的记录

​            db.foo.remove({'yy':5})

​         5. #删除所有的记录

​            db.foo.remove()

   #### 索引

​         1. #增加索引：1(ascending),-1(descending)

​         2. db.foo.ensureIndex({firstname: 1, lastname: 1}, {unique: true});

​         3. #索引子对象

​         4. db.user_addr.ensureIndex({'Al.Em': 1})

​         5. #查看索引信息

​         6. db.foo.getIndexes()

​         7. db.foo.getIndexKeys()

​         8. #根据索引名删除索引

​         9. db.user_addr.dropIndex('Al.Em_1')

#### 查询

​         1. #查找所有

​        2. db.foo.find()

​        3. #查找一条记录

​        4. db.foo.findOne()

​        5. #根据条件检索10条记录

​        6. db.foo.find({'msg':'Hello 1'}).limit(10)

​        7. #sort排序

​        8. db.deliver_status.find({'From':'ixigua@sina.com'}).sort({'Dt',-1})

​         9. db.deliver_status.find().sort({'Ct':-1}).limit(1)

​        10. #count操作

​        11. db.user_addr.count()

​        12. #distinct操作,查询指定列，去重复

​        13. db.foo.distinct('msg')

​        14. #”>=”操作

​        15. db.foo.find({"timestamp": {"$gte" : 2}})

​        16. #子对象的查找

​        17. db.foo.find({'address.city':'beijing'})

  #### 管理

​         1. #查看collection数据的大小

​         2. db.deliver_status.dataSize()

​         3. #查看colleciont状态

​         4. db.deliver_status.stats()

​         5. #查询所有索引的大小

​         6. db.deliver_status.totalIndexSize()

现在开始建立项目的数据库

```
//找到你的安装目录, 然后启动
//  --dbpath :设置数据库的路径  --logpath :这是日志的路径   --port :设置端口 
hds@hdsdeMacBook-Pro  ~/Documents/mongodb-osx-x86_64-3.4.9/bin  ./mongod --dbpath=/Users/hds/Documents/blog_demo/db/ --logpath=/Users/hds/Documents/blog_demo/db/dblog/mongo.log --port=27017
```

这样就启动了MongoDB

然后打开另一个命令行

```
hds@hdsdeMacBook-Pro  ~/Documents/mongodb-osx-x86_64-3.4.9/bin  ./mongo
```

然后新建数据库

`use blog`    这里'blog'是名字

现在回到项目

##mongoose

　　Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具

等于说你只要操作对象 就可以控制数据库完成增删改查了 简直方便   这里是[文档](http://www.nodeclass.com/api/mongoose.html#quick_start)

```
//设置mongoose  connect
mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log('数据库连接成功!');
        app.listen(8080);
        console.log('listen:8080');
    }
});
```

运行成功就说明已经连接到了数据库

现在在models目录下创建 user.js 

```
var mongoose = require('mongoose');


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
```

同样的 来创建其他的表

```
var mongoose = require('mongoose');

//分类表结构
//创建一个schema 设计表结构
var classifySchema = mongoose.Schema({
    
    //分类名
    name:String,
    
})
//以classifySchema创建了一个model  并且暴露出去  ,之后直接操作这个model就可以了
module.exports = mongoose.model('user',classifySchema);
```

```
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
```

表结构设计好了之后我们就可以来实现功能了

##实现功能

### 使用nunjucks

index.html页面太长了 , 而且里面有些布局是可以复用的 , 所有把其中的布局放到 layout.html 里面去

然后再其他页面就可以继承 复用这些布局

页面顶部的导航和页脚都是可以复用的, 所有我们把这些部分复制到 layout.html 里面 , 然后在`<footer>`上面输入

```
 <!-- 用block占位 -->
   {% block document %}{% endblock %}
```

然后回到index.html页面

```
<!-- 继承 layout.html -->
{% extends "main/layout.html" %}

<!-- 文章 -->
{% block document %}
<div class="row">

    <div class="col-md-2"></div>
    <div class=" col-md-8">
        <div class="document">
            <h3>文章标题</h3>
            <span>时间:</span>
            <br>
            <span>阅读数:</span>
            <br>
            <span>评论数:</span>
            <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
        </div>
        <div class="document">
            <h3>文章标题</h3>
            <span>时间:</span>
            <br>
            <span>阅读数:</span>
            <br>
            <span>评论数:</span>
            <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
        </div>
        <div class="document">
            <h3>文章标题</h3>
            <span>时间:</span>
            <br>
            <span>阅读数:</span>
            <br>
            <span>评论数:</span>
            <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
        </div>
        <div class="document">
            <h3>文章标题</h3>
            <span>时间:</span>
            <br>
            <span>阅读数:</span>
            <br>
            <span>评论数:</span>
            <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
        </div>
    </div>
    <div class="col-md-2"></div>

</div>
{% endblock %}
```

继承自layout.html

### 注册

现在开始写注册功能

刚刚写的时候遇到一下小问题 , req.body 获取不到 , 找了好久 , 最后发现在app.js 里面引用顺序出错了2333

先在前端里面写ajax

```
//注册功能
    $('#signinModal .modal-footer .signinSub').click(function () {
        var username = $('#signinForm input[name="username"]').val();
        var password = $('#signinForm input[name="password"]').val();
        var repassword = $('#signinForm input[name="repassword"]').val();
        if (password != repassword) {
            $('#signinModal .modal-content small').html('两次输入的密码不一致');
            return;
        }
    
        $.post('/api/user/signin',
        {
            username:username,
            password:password
        },
            function(resData){
                $('#signinModal .modal-content small').html(resData.message);
        });

    });
```

api.js 

```
//设置返回的数据格式
var resData = {
    code: 0,
    message: ''
};


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
            resData.message = '用户名已存在';
            res.json(resData);
        } else {
            //不存在,保存到数据库
            var newUser = new user({
                username:username,
                password:password
            });
            return newUser.save();
        }
    }).then(function(newInfo){
        resData.message='注册成功';
        res.json(resData);
    })

});
```

### 登录

前端  index.js

```
//登录功能
    $('#loginModal .modal-footer .loginSub').click(function(){
        $.post('/api/user/login',{
            username:$('#loginModal input[name="username"]').val(),
            password:$('#loginModal input[name="password"]').val()
        },function(resData){
            console.log(resData);
        });
    })
```

api.js

```
//登录功能
router.post('/user/login', function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;
    user.findOne({
        username: username,
        password: password
    }).then(function (Info) {
        if (!Info) {
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
```



















