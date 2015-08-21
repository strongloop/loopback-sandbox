module.exports = function(app, cb){
  var Item = app.models.item;
  var Image= app.models.image;
  var Promise = require('bluebird');

  Item.create([
   {name: 'item 1'},
   {name: 'item 2'},
  ]).then(function(items){
    return Promise.map(items, function(item){
      return item.images.create([
        {path: '1'},
        {path: '2'}
      ])
    });
  }).then(function(){
    cb();
  });
};
