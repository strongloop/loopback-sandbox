// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-sandbox

'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
