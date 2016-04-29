var controller;

module.exports = function(app) {
  controller = app.controller(ctrl);
  controller.remoteMethod('speak', {
    http: { path: '/', verb: 'get' },
    accepts: { arg: 'inp', type: 'string', required: false },
    returns: { arg: 'msg', type: 'string' },
  });
  console.log(app._remotes._classes);
};

function ctrl(app, ctx) {
  this.name = 'TestName';
  this.app = app;
  this.ctx = ctx;
};

ctrl.prototype.speak = function(inp, cb) {
  cb(null, this.ctx.toString());
};
