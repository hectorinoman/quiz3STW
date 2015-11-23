var Question = require('../models/question.js');

function LargeQuestion(ques){
  Question.call(this, ques);
  this.view = "<textarea type='text' name='respuesta' rows='5' cols='50' placeholder='Responda aquí' autofocus=''></textarea>";
}


LargeQuestion.prototype.getKind = function(){
  return this.kind;
}

LargeQuestion.prototype.getQues = function(){
  return this.ques;
}


LargeQuestion.prototype = new Question();
LargeQuestion.prototype.constructor = LargeQuestion;


module.exports = LargeQuestion;