var http = require('http');
var qs = require('querystring');
var async = require('async');
var request = require('request');

exports.getCaseUser = function(caseId,userId,callback){
    async.waterfall([
        //获取个人用户排名
        function(callback){
            console.log("caseId:"+caseId);
            var data ={caseId:caseId,userId:userId};
            //var content = qs.stringify(data);
            console.log("userId:"+data["userId"]);
            var catalog = {}; 

            var options = {
              url: 'https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery',
              headers: {
                'User-Agent': 'request'
              }
            };

            request(options, function(error, response, body){
              if (!error && response.statusCode == 200) {
                  callback(null,body);
              }else{
                console.log(body);
              }  
            });
        }
    ], function (err, catalog) {
        callback(null, catalog);
    });
}

/*exports.getCaseAllUser = function(caseId,callback){
    async.waterfall([
        //获取个人用户排名
        function(caseId,callback){
            var data ={"caseId":caseId};
            var content = qs.stringify(data);
            var catalog = {}; 

            var options = {  
                hostname: '127.0.0.1',  
                port: 10086,  
                path: '/pay/pay_callback?' + content,  
                method: 'GET'  
            };

            var req = http.request(options, function (res) { 
                console.log('STATUS: ' + res.statusCode);  
                console.log('HEADERS: ' + JSON.stringify(res.headers));  
                res.setEncoding('utf8');  
                res.on('data', function (bugs) { 
                    bugs.forEach(function(bug){
                        bug.path.forEach(function(path){
                            if(!catalog[path]){
                                catalog[path] = 0;
                            }
                            catalog[path]++;
                        });
                    });
                    callback(null,catalog);   
                });  
            });
        }
    ], function (err, catalog) {
        db.close();
        callback(null, catalog);
    });
}*/

/*exports.getCaseAllUser = function(caseId){
    var data ={"caseId":caseId};
    var content = qs.stringify(data);
    var catalog = {}; 

    var options = {  
        hostname: '127.0.0.1',  
        port: 10086,  
        path: '/pay/pay_callback?' + content,  
        method: 'GET'  
    };

    var req = http.request(options, function (res) { 
        console.log('STATUS: ' + res.statusCode);  
        console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (bugs) { 
            bugs.forEach(function(bug){
                bug.path.forEach(function(path){
                    if(!catalog[path]){
                        catalog[path] = 0;
                    }
                    catalog[path]++;
                });
            });
              
        });  
    });

    req.on('error', function (e) {  
        console.log('problem with request: ' + e.message);  
    });

    req.end();
    return catalog;
} 

exports.getCaseUser = function(caseId,userId,callback){
    var data ={"caseId":caseId,"userId":userId};
    var content = qs.stringify(data);
    var catalog = {}; 

    var options = {  
        hostname: '127.0.0.1',  
        port: 10086,  
        path: '/pay/pay_callback?' + content,  
        method: 'GET'  
    };

    var req = http.request(options, function (res) { 
        console.log('STATUS: ' + res.statusCode);  
        console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (bugs) { 
            bugs.forEach(function(bug){
                bug.path.forEach(function(path){
                    if(!catalog[path]){
                        catalog[path] = 0;
                    }
                    catalog[path]++;
                });
            });
            callback(null,catalog);      
        });  
    });
}*/ 