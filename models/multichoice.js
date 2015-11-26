var Question = require('../models/question.js');

function MultiChoice(ques){
  Question.call(this, ques);
  this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
}


MultiChoice.prototype.getKind = function(){
  return this.kind;
}

MultiChoice.prototype.getQues = function(){
  return this.ques;
}

MultiChoice.prototype = new Question();
MultiChoice.prototype.constructor = MultiChoice;

module.exports = MultiChoice;