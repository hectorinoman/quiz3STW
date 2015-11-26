var Question = require('../models/question.js');

function SimpleChoice(ques,options){
  Question.call(this, ques);
  this.options = options;
        for(var i = 0; i<options.length;i++){
        this.view += "<input type='radio' name='respuesta' value='"+options[i]+"'>"+options[i]+"<br>";
      }
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