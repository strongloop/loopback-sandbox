var app   = require('../server/server.js');
var Item  = app.models.item;
var Image = app.models.image;
var Promise = require('bluebird');
var assert = require('assert');

describe('HasMany with Polymorphic query with scope', function() {

  beforeEach(function(done) {
    Item.create([
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 3' }
    ], function(err, items) {
      Promise.map(items, function(item){
        return item.images.create([{path: 1}, {path: 2}])
      }).then(function(images){
        done()
      });
    });
  })

  it('should return 1 image each items', function(done){
    Item.find({
      include: {
        relation: 'images',
        scope: {
          limit: 1
        }
      }
    }, function(err, items){
      items = items.map(function(item){
        return item.toJSON();
      });
      console.log(items);
      assert.equal(items[0].images.length, 1);
      assert.equal(items[1].images.length, 1);
      assert.equal(items[2].images.length, 1);
      done();
    });
  });
});
