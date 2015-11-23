function Question(ques){
  this.ques = ques;
  this.view;
}


Question.prototype.getKind = function(){
  return this.view;
}

Question.prototype.getQues = function(){
  return this.ques;
}

Question.prototype.Kind = function() {
  if(this instanceof ShortQuestion){
    this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
  }
  else {
    this.view = "<textarea type='text' name='respuesta' rows='5' cols='50' placeholder='Responda aquí' autofocus=''></textarea>";
  }
}


module.exports = Question;
