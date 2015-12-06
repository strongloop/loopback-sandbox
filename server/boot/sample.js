module.exports = function(app, done) {
  var Category = app.models.category;
  var Game = app.models.game;

  Category.create({name: 'cate1'}, function(err, category) {
    if (err) console.log(err);
    console.log('Created Category >>>', category);

    category.games.create([
    {
        name: 'game1',
        mature: 'true'
    },
    {
    	name: 'game2',
    	mature: 'false'
    }
    ], function(err, games) {
       if (err) console.error(err);
       console.log('Created games >>>', games);
       Game.find({
       	"where": {
       		categoryId: 1,
       		mature: true
       	}
       }, function(err, result) {
       	  if (err) console.log(err);
       	  // The query in code is equivalent to
       	  // endpoint 'http://localhost:3000/api/categories/1/games?filter[where][mature]=true'
       	  console.log('Result of endpoint >>>', result);
       	  done(null);
       });
    });
  });
}