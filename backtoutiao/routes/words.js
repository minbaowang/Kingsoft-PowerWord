var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let app = express();
let MongoClient = require('mongodb').MongoClient;
let DB_CONN_STR = 'mongodb://localhost:27017';
// let code = require('../lib/base63.js')

// 专门处理post请求的
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())


//获取数据
router.get('/words',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库所有内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('powerWord');
        dbo.collection('word').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})
//插入数据
router.get('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var word = req.query.word;
        var id= req.query.id;
        var translation= req.query.translation;
        var pronun= req.query.pronun;
        var arr=[{id,word,translation,pronun}]
        var dbo = db.db('powerWord');
        dbo.collection('word').find({word}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            //如果查询的结果是空的，就往数据库添加用户名和密码
            if(request.length==0){
                dbo.collection('word').insert(arr,function (err, requests){
                    if(err){
                        console.log(err)
                    }
                    res.send('yes')
                })
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//删除数据
router.get('/delete',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        var word=req.query.word;
        var dbo = db.db('powerWord');
        dbo.collection('word').find({word}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            //如果查询的结果是空的，就往数据库添加用户名和密码
            if(request.length>0){
                dbo.collection("word").remove({
                    word:word
                  }, function(err, result) {
                    if (err) {
                      console.log('Error:' + err);
                    }
                    res.send('yes')
                })
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//查找单条数据
router.get('/Owords',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库单条内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var wsearch=req.query.wsearch;
        let dbo = db.db('powerWord');
        dbo.collection('word').find({word:wsearch}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//更新数据
router.get('/updata',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //更新数据
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var word = req.query.word;
        var id= req.query.id;
        var translation= req.query.translation;
        var pronun= req.query.pronun;
        let dbo = db.db('powerWord');
        dbo.collection("word").update({
            word
          }, {
            $set: {
              id: id,
              translation: translation,
              pronun:pronun
            }
          }, function(err, result) {
            if (err) {
              console.log('Error:' + err);              
            }
            res.send("yes")
            //console.log(result);
          });
    })
})

//判断是否输入正确
router.get('/getid',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库查询的内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var id=req.query.id;
        let dbo = db.db('powerWord');
        dbo.collection('word').find({id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send("yes")
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//获取数据
router.get('/essay',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库所有内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        let dbo = db.db('powerWord');
        dbo.collection('write').find({}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//插入文章
router.get('/insertEssay',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var title = req.query.title;
        var id= req.query.id;
        var article= req.query.article;
        var chinese= req.query.chinese;
        var arr=[{id,title,article,chinese}]
        var dbo = db.db('powerWord');
        dbo.collection('write').find({id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            //如果查询的结果是空的，就往数据库添加用户名和密码
            if(request.length==0){
                dbo.collection('write').insert(arr,function (err, requests){
                    if(err){
                        console.log(err)
                    }
                    res.send('yes')
                })
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

// 判断是否已经有该文章
router.get('/getEssayid',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库查询的内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var id=req.query.id;
        let dbo = db.db('powerWord');
        dbo.collection('write').find({id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send("yes")
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//删除文章
router.get('/deleteEssay',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        var id=req.query.id;
        var dbo = db.db('powerWord');
        dbo.collection('write').find({id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            //如果查询的结果是空的，就往数据库添加
            if(request.length>0){
                dbo.collection("write").remove({
                    id
                  }, function(err, result) {
                    if (err) {
                      console.log('Error:' + err);
                    }
                    res.send('yes')
                })
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//查找单篇文章
router.get('/Owrite',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库单条内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var id=req.query.id;
        let dbo = db.db('powerWord');
        dbo.collection('write').find({id}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})

//更新文章
router.get('/updataEssay',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //更新数据
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var title = req.query.title;
        var id= req.query.id;
        var article= req.query.article;
        var chinese= req.query.chinese;
        let dbo = db.db('powerWord');
        dbo.collection("write").update({
            id
          }, {
            $set: {
                title: title,
                article: article,
                chinese:chinese
            }
          }, function(err, result) {
            if (err) {
              console.log('Error:' + err);              
            }
            res.send("yes")
            //console.log(result);
          });
    })
})


//登录获取权限
// router.post('/log',function(req,res){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     var username = req.body.username;
//     var password = req.body.password;
//     var radio=req.body.radio;
//     //检测数据库有没有相同的用户名
//     MongoClient.connect(DB_CONN_STR, function (err, db) {
//         let dbo = db.db('powerWord');
//         dbo.collection('user').find({username,password}).toArray(function (err, request) {
//             if (err) {
//                 console.log(err)
//             }
//             console.log(request)
//             if(request.length!==0){
//             	res.send(request)
//             }else{
//                 res.send('no')
//             }
//             db.close();
//         })
//     })
// });

//查找单条数据
router.get('/login',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //返回数据库单条内容
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        var radio=req.query.radio;
        var username=req.query.username;
        console.log(username)
        var password=req.query.password;
        let dbo = db.db('powerWord');
        dbo.collection('user').find({username,password,radio}).toArray(function (err, request) {
            if (err) {
                console.log(err)
            }
            // console.log(request)
            if(request.length!==0){
            	res.send(request)
            }else{
                res.send('no')
            }
            db.close();
        })
    })
})
module.exports = router;