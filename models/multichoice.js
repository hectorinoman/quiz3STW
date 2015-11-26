var Question = require('../models/question.js');

function MultiChoice(ques,options){
  Question.call(this, ques);
  this.options = options;
  for(var i = 0; i<options.length;i++){
        this.view += "<input type='checkbox' name='respuesta[]' value='"+options[i]+"'>"+options[i]+"<br>";
      }
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