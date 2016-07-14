module.exports = function(Space) {
    Space.orderedResult = function(callback) {
      Space.find({
        where: {id: 1},
        include: {relation: 'customers', scope: {order: 'name'}}}, function(err, space){
          if (err) callback(err, null);
          callback(null, space);
        });
    }
    
	Space.remoteMethod('orderedResult', {
		returns: [
		  { arg: 'orderedResult', type: 'string'}
		],
	});
};
