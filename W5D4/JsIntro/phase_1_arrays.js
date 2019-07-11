Array.prototype.myUnique = function() {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
}

Array.prototype.twoSum = function() {
  const result = [];

  for(let i = 0; i< this.length; i++){
    for(let j = 0; j< this.length; j++){
      if((j>i) && (this[i] + this[j] === 0)){
        let subArr = [];
        subArr.push(i);
        subArr.push(j);
        result.push(subArr);
      }
    }
  }
  return result;
}


Array.prototype.transpose = function() {
  const result = [];
  for(let row = 0; row< this.length; row++){
    const sub = [];
    for(let col = 0; col< this.length; col++){
      const n = this[col][row];
      sub.push(n);
    }
    result.push(sub);
  }
  return result;
}