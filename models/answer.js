function Answer(ans){
  this.ans = ans;
  if(typeof(this.ans) === 'string' || typeof(this.ans) === 'number') {
    return function(x){return x === this.ans;};  
  }
  else if (this.ans instanceof RegExp) {
    return function(x){return (this.ans).exec(x);};
  }
  else {
    return ans;
  }
}

module.exports = Answer;