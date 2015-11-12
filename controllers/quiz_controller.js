var Quiz = require('../models/quiz_model');

var quiz = new Quiz();
var current = quiz.randomQuestion();

exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

exports.answer = function(req, res) {
  var c = 'Incorrecto';
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c})
};

exports.questions = function(req,res) {
  var nPreg = quiz.numQuestions();
  var cadena = "";

  for(var i=0; i<nPreg; i++) {
    cadena = cadena.concat("Pregunta " + (i+1) + ": " + quiz.getQ(i) + "<br><br>");
  }

  console.log(cadena);
  res.render('quizes/questions', {prg: cadena})
};