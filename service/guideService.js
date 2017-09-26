var async = require('async');

/*var httpService = require('httpService.js');
exports.getCaseAllUser = function(caseId,callback){
	async.waterfall([
		httpService.getCaseAllUser,
	], function (err, result) {
	    callback(null, result);
	});
}

exports.getCaseAllUser = function(caseId,userId,callback){
	async.waterfall([
		httpService.getCaseUser,
	], function (err, result) {
	    callback(null, result);
	});
}*/

exports.randomSet = function(data){
	var solved = new Array();

	data.forEach(function(First){
		First['value']+=randomValue();
		First['bugs'] = randomBugs();
		var temp1 = {};

		if (randomFlag()) {
			temp1["point"] = First['First'];
			temp1["value"] = randomValue()+1;
			solved.push(temp1);
		}

		First['children'].forEach(function(Second){
			Second['value']+=randomValue();
			Second['bugs'] = randomBugs();
			var temp2 = {};

			if (randomFlag()) {
				temp2["point"] = Second['Second'];
				temp2["value"] = randomValue()+1;
				solved.push(temp2);
			}

			Second['children'].forEach(function(Third){
				Third['value']+=randomValue();
				Third['bugs'] = randomBugs();
				var temp3 = {};
				if (randomFlag()) {
					temp3["point"] = Third['Third'];
					temp3["value"] = randomValue()+1;
					solved.push(temp3);
				}
			})
		})

	})
	var result = {"path":data,"solved":solved};
	return result;
}

function randomFlag(){
	var random = Math.random()
	if(random>0.7)
		return true;
	else
		return false;
}

function randomValue(){
	var random = Math.random()
	if(random>0.7)
		return 0;
	else
		return Math.floor(random*5);
}

function randomBugs(){
	var bugsPool = new Array("页面边距太宽","图片没有加载","页面不美观","按钮无效","不能返回","无法联网",
						"错误2","错误3","错误4","错误5","错误6","错误7");
	var bugsReal = new Array();
	for(var i=0;i<5;i++){
		var index = Math.floor(Math.random()*bugsPool.length);
		bugsReal.push(bugsPool[index]);
	}
	return bugsReal;
}
