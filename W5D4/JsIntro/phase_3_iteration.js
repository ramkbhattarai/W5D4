

Array.prototype.bubbleSort = function() {
  let sorted = true;
  
  while (sorted){
    sorted = false;
    for(let i = 0; i < this.length -1; i++){
      if (this[i] > this[i + 1]){
        sorted = true; 
        tmp = this[i];
        this[i] = this[i+1];
        this[i+1] = tmp;
      }
    }
  }
return this;
}

String.prototype.substrings = function () {
  const answer = [];
  for(let i =0; i < this.length - 1; i++){
    for (let j = 0; j < this.length; j++) {
        if ((j > i) && (!answer.includes(this.substring(i,j)))){
          answer.push(this.substring(i, j));
        }
    }
  }
  return answer;
}

