module.exports = function(app) {
  var Expense = app.models.Expense;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var db = app.dataSources.postgre;
  // console.log('datasources', app.dataSources.postgrelocal);

  var lbTables = [
    'User',
    'AccessToken',
    'ACL',
    'RoleMapping',
    'Role',
    'Expense',
  ];
  db.automigrate(lbTables, function(er) {
    if (er) throw er;
    console.log('Loopback tables ', lbTables, ' created in ', db.adapter.name);

    Expense.create(
      [
        {
          date: '2017-04-19T16:15:37.919Z',
          description: 'expense 1',
          comment: 'this is a dumb expense.',
          amount: 156,
        },
        {
          date: '2017-04-19T16:15:37.919Z',
          description: 'expense 2',
          comment: 'this is an extra dumb expense.',
          amount: 0,
        },
        {
          date: '2017-04-19T16:15:37.919Z',
          description: 'expense 3',
          comment: 'this is a dumb expense.',
          amount: 12.5,
        },
      ],
      function(err, expenses) {
        if (err) throw err;

        console.log('Expenses created: \n', expenses);
      }
    );
  });
};
