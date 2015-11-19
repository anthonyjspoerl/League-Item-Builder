var rewire = require('rewire');
var riot = require('riot-games-api-nodejs');
riot.developerKey = 'e3285489-6f06-47b3-9b7a-108971753268';
riot.settings.region = 'na';

var items;

function getItems(callback){
	if(items) return callback(null, items);

	riot.staticData.item({itemListData: 'gold,image'}, function(err, data){
		if(err) {
			console.log(err);
			return callback(err);
		}
		items = data;
		callback(null, data);
	});
}

function calculateCost(item){

}

exports.getItems = getItems;
exports.calculateCost = calculateCost;