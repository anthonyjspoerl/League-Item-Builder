var assert = require('assert');
var rewire = require('rewire');
var collect = rewire('../src/collect-item-data');

describe('collect-item-data', function(){
	describe('#preloadItems(callback)', function(){
		context('required itemListDetails', function(){
			this.timeout(30000); // increase mocha default timeout for api call
			
			it('should load items with gold data', function(done){
				// given

				// when
				collect.preloadItems(function(err, items){
					// then
					// 1001 apparently first item occurance
					assert.notEqual(typeof items['1001'].gold, 'undefined');
					done();
				});
			});
			it('should load items with image data', function(done){
				// given

				// when
				collect.preloadItems(function(err, items){
					// then
					assert.notEqual(typeof items['1001'].image, 'undefined');
					done();
				});
			});
		});
		context('error handling', function(){

		});
	});

	describe('#calculateCost(items)', function(){
		it('should return succesful from Riot API call');
	});
});