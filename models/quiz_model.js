var AbstractQuiz = require('../models/abstract_quiz_model.js');
var ShortQuestion = require('../models/shortquestion.js');
//var LargeQuestion = require('../models/question.js');
var Answer = require('../models/answer.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: new ShortQuestion('¿Capital de Italia?'),
      respuesta: new Answer(/^\s*roma\s*$/i)
    },

    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
    },
      
    {
      pregunta: new ShortQuestion('¿Qué instrumento musical tiene nombre y forma geométricos?'),
      respuesta: new Answer ((/^\s*triangulo\s*$/i))
      
    },
    
        {
      pregunta: new ShortQuestion('¿Qué capital española tiene cinco veces la misma vocal "a"?'),
      respuesta: new Answer (/^\s*guadalajara\s*$/i)
      
    },
    
            {
      pregunta: new ShortQuestion (' ¿Con qué nombre firmaba Pablo Picasso sus pinturas? '),
      respuesta: new Answer (/^\s*picasso\s*$/i)

    },
            {
      pregunta: new ShortQuestion(' ¿Cuál es el fruto del roble?  '),
      respuesta: new Answer(/^\s*bellota\s*$/i)

    },
    
            {
      pregunta: new ShortQuestion(' ¿Qué pie puso primero Neil Amstrong sobre la Luna? '),
      respuesta: new Answer(/^\s*izquierdo\s*$/i)

    },
    
    
    
   
   
    
    
    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado',
      respuesta: function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }
    }
  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<1;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: new ShortQuestion('¿ '+n1+'x'+n2+"= ?"),
          respuesta: new Answer (function(x) {
            return (x == n1*n2);
        })
      })
    })();
  }
}

Quiz.prototype.getQ = function (index) {
  return this.q[index];
}

Quiz.prototype.numQuestions = function() {
	return this.q.length;
}


Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
  return this.q.length;
}

Quiz.prototype.getQ = function(x) {
  return this.q[x]['pregunta'];
}

module.exports = Quiz;