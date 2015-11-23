var Question = require('../models/question.js');

function ShortQuestion(ques){
  Question.call(this, ques);
  this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
}


ShortQuestion.prototype.getKind = function(){
  return this.kind;
}

ShortQuestion.prototype.getQues = function(){
  return this.ques;
}

ShortQuestion.prototype = new Question();
ShortQuestion.prototype.constructor = ShortQuestion;

module.exports = ShortQuestion;