function Answer(ans){
  this.ans = ans;
  if(typeof(this.ans) === 'string' || typeof(this.ans) === 'number') {
    return function(end){return end === this.ans;};  
  }
  else if (this.ans instanceof RegExp) {
    return function(end){return end.match(ans);};
  }
  
    else if(ans instanceof Array){
    return function(end){
      if(ans.length != end.length) return false;

      for(var i=0; i<ans.length; i++){
        if(ans[i] != end[i]) 
        return false;
      }

      return true;
    };
  }
  
  
  
  
  
  
  
  else {
    return ans;
  }
}

module.exports = Answer;