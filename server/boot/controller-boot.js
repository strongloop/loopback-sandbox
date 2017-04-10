var controller;

module.exports = function(app) {
  // here app.controller(ctrl) creates a controller wrapper to register
  // the 'ctrl' class with strong-remoting
  app.controller(ctrl).remoteMethod('speak', {
    http: { path: '/', verb: 'get' },
    returns: { arg: 'msg', type: 'string', root: true },
  });
};

function ctrl(app, ctx) {
  // actually ends up registering at /api/ctrl
  this.name = 'TestName';

  // still need to decide on conventions
  // might not want to reference app instance at all
  this.app = app;
  this.ctx = ctx;

  // Instead, possibly:
  // this.Question = app.models.Question;
  // this.Choice = app.models.Choice;
  // where Question and Choice are the only dependents (for example)
};

ctrl.speak = function(cb) {
  // Here I'm just checking the ctx to make sure it exists
  cb(null, Boolean(this.ctx).toString());
};
