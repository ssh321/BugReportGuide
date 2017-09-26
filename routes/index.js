var express = require('express');
var async = require('async');
var router = express.Router();
var httpService = require('../service/httpService.js');
var excelService = require('../service/excelService.js');
var guideService = require('../service/guideService.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getCaseAll', function(req, res, next) {
    async.waterfall([
        function(callback){
            var data = excelService.ExcelToList();
            var result = guideService.randomSet(data);
            callback(null,result);
        }
        ],function(err,result){
            res.send(result);
     });
});

/*router.get('/getCaseUser', function(req, res, next) {
    async.waterfall([
        function(callback){
            var caseId = req.query.caseId;
            var userId = req.query.userId;
            callback(null,caseId,userId);
        },
            httpService.getCaseUser,
        ],function(err,caseId,userId){
            res.send(result);
     });
});


router.get('/getCaseUser', function(req, res, next) {
    async.waterfall([
        function(callback){
            var caseId = req.query.caseId;
            var userId = req.query.userId;
            callback(null,caseId,userId);
        },
        	httpService.getCaseUser,
        ],function(err,result){
            res.send(result);
     });
});

router.get('/getCaseAllUser', function(req, res, next) {
    async.waterfall([
        function(callback){
			var caseId = req.query.caseId;
            callback(null,caseId);
        },
        httpService.getCaseAllUser,
        ],function(err,result){
            res.send(result);
     });
});*/

module.exports = router;
