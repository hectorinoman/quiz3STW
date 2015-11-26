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
  if(this instanceof SimpleChoice){
    this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
  }
  if(this instanceof MultiChoice){
    this.view = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
  }
  if(this instanceof LargeQuestion){
    this.view = "<textarea type='text' name='respuesta' rows='5' cols='50' placeholder='Responda aquí' autofocus=''></textarea>";
  }
}


module.exports = Question;
