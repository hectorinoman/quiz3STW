var Question = require('../models/question.js');

function SimpleChoice(ques){
  Question.call(this, ques);
  this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
}


SimpleChoice.prototype.getKind = function(){
  return this.kind;
}

SimpleChoice.prototype.getQues = function(){
  return this.ques;
}

SimpleChoice.prototype = new Question();
SimpleChoice.prototype.constructor = SimpleChoice;

module.exports = SimpleChoice;