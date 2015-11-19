var assert  = require('assert');
var sinon   = require('sinon');
var rewire  = require('rewire');
var chance  = require('chance');
var collect = rewire('../src/collect-item-data');

describe('collect-item-data', function(){
	var sandbox = sinon.sandbox.create();
	var riot    = collect.__get__('riot');

	beforeEach(function(){
		sandbox.restore();
	});

	describe('#getItems(callback)', function(){
		context('avoid multiple api calls', function(){
			// increase mocha default timeout for api call
			// * unfortunately, if these tests fail, some/all others may timeout
			this.timeout(30000);

			it('should save item list from api call', function(done){
				// when
				collect.getItems(function(err, returnedItems){
					// then
					var savedItems = collect.__get__('items');
					assert.equal(savedItems, returnedItems);
					done();
				});
			});
			it('should not make api call once list is saved', function(done){
				// given
				collect.__set__('items'); // reset items
				var riotItemSpy = sandbox.spy(collect.__get__('riot.staticData'), 'item');

				// when
				// * this is very hacky/confusing, considering refactor with async
				collect.getItems(function(){
					assert.notEqual(typeof collect.__get__('items'), 'undefined');

					collect.getItems(function(err, returnedItems){
						// then
						assert(riotItemSpy.calledOnce);
						done();
					});
				});
			});
		});
		context('required itemListDetails', function(){			
			it('should load items with gold data', function(done){
				// given

				// when
				collect.getItems(function(err, items){
					// then
					// 1001 apparently first item occurance
					assert.notEqual(typeof items['1001'].gold, 'undefined');
					done();
				});
			});
			it('should load items with image data', function(done){
				// given

				// when
				collect.getItems(function(err, items){
					// then
					assert.notEqual(typeof items['1001'].image, 'undefined');
					done();
				});
			});
		});
		context('error handling', function(){
			it('should not save item data if there was an error', function(){
				// given
				collect.__set__('items', undefined);
				sandbox.stub(riot.staticData, 'item', function(params, cb){
					cb(new Error('No data for you'));
				});

				// when
				collect.getItems(function(){});

				// then
				assert.equal(collect.__get__('items'), undefined);
			});
		});
	});

	describe('#calculateCost(items)', function(){
		it('should sum gold cost of all items');
	});
});