function Question(ques){
  this.ques = ques;
  this.kind;
}

function ShortQuestion(ques){
  Question.call(this, ques);
  kind = "short";
}

ShortQuestion.prototype.getKind = function(){
  return this.kind;
}

ShortQuestion.prototype.getQues = function(){
  return this.ques;
}

function LargeQuestion(ques){
  Question.call(this, ques);
  kind = "large";
}

LargeQuestion.prototype.getKind = function(){
  return this.kind;
}

LargeQuestion.prototype.getQues = function(){
  return this.ques;
}

ShortQuestion.prototype = new Question();
ShortQuestion.prototype.constructor = ShortQuestion;
LargeQuestion.prototype = new Question();
LargeQuestion.prototype.constructor = LargeQuestion;


module.exports = Question;
module.exports = ShortQuestion;
module.exports = LargeQuestion;