var rewire = require('rewire');
var riot = require('riot-games-api-nodejs');
riot.developerKey = 'e3285489-6f06-47b3-9b7a-108971753268';
riot.settings.region = 'na';

function preloadItems(callback){
	riot.staticData.item({itemListData: 'afll'}, function(err, data){
		if(err) callback(err);
		callback(null, data);
	});
}

function calculateCost(items){

}

exports.preloadItems = preloadItems;
exports.calculateCost = calculateCost;