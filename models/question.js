function Question(ques){
  this.ques = ques;
  this.view = "";
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
    for(var i = 0; i<options.length;i++){
        this.view += "<input type='radio' name='respuesta' value='"+options[i]+"'>"+options[i]+"<br>";
      }
  }
  if(this instanceof MultiChoice){
      for(var i = 0; i<options.length;i++){
        this.view += "<input type='checkbox' name='respuesta[]' value='"+options[i]+"'>"+options[i]+"<br>";
      }
  }
  if(this instanceof LargeQuestion){
    this.view = "<textarea type='text' name='respuesta' rows='5' cols='50' placeholder='Responda aquí' autofocus=''></textarea>";
  }
}


module.exports = Question;
