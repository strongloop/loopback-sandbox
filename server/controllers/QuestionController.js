var QuestionCtrl;

module.exports = QuestionCtrl = function(app, ctx) {
  this.app = app;
  this.ctx = ctx;
  this.Question = app.models.Question;
  this.Choice = app.models.Choice;
};

QuestionCtrl.prototype.vote = function(questionId, choiceId, cb) {
  this.Question.findById(questionId, function(err, question) {
    question.choices.findOne({ where: { choiceId: choiceId }},
    function(err, choice) {
      choice.count++;
      choice.save();
      cb(null, choice);
    });
  });
};

