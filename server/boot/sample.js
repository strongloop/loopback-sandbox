module.exports = function(server, done) {
  var Space = server.models.Space;
  var customers = [
    { name: 'ccustomer'},
    { name: 'bcustomer'},
    { name: 'acustomer'}
  ];

  Space.create({ name: 'myspace' }).then(function(space) {
  	console.log('created space >> ' + JSON.stringify(space));

  	space.customers.create(customers).then(function(customers) {
	  console.log('created customers >> ' + JSON.stringify(customers));

	  Space.findById(1, function(err, space){
	    space.customers(function(err, results){
	      console.log('result>> ' + JSON.stringify(results));
	      done();
	    });
	  });

	});

  });
};
