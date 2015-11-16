var assert = require('assert');
var rewire = require('rewire');
var collect = rewire('../src/collect-item-data');

describe('collect-item-data', function(){
	describe('#preloadItems(callback)', function(){
		context('required itemListDetails', function(){
			it('should load items with gold data', function(done){
				// given
				this.timeout(30000); // increase mocha default timeout for api call

				// when
				collect.preloadItems(function(err, items){
					if(err) console.log(err);
					// then
					// 1001 apparently first item occurance
					assert.notEqual(typeof items['1001'].gold, 'undefined');
					done();
				});
			});
		});
	});

	describe('#calculateCost(items)', function(){
		it('should return succesful from Riot API call');
	});
});