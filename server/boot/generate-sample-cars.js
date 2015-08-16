module.exports = function(app) {
  if(app.dataSources.db.name !== 'Memory') return;

  app.models.Car.create({
    name: 'My private car',
    color: 'black'
  }, function(err, data) {
    console.log('Example Car created with ID:%s', data.id);
  });

  app.models.Car.create({
    name: 'Company car',
    color: 'red'
  }, function(err, data) {
    console.log('Example Car created with ID:%s', data.id);
  });

  app.models.Car.create({
    name: 'Funcar',
    color: 'blue'
  }, function(err, data) {
    console.log('Example Car created with ID:%s', data.id);
  });

};

