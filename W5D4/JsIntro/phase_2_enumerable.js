// const arr = Array.prototype;
function callBackFunction(ele) {
   console.log(ele);
}

Array.prototype.myEach = function(ourCallBack) {
  for(let i = 0; i < this.length; i++){
    ourCallBack(this[i]);
  }
}

function secondCallBack(ele) {
  return (ele * 2);
}

Array.prototype.myMap = function (ourCallBack) {
   const b = [];
   const alex = function(ele) {
     b.push(ourCallBack(ele));
   };
   this.myEach(alex);
  return b;
}


function thirdCallBack(ele) {
  return ele;
} 

Array.prototype.myReduce = function (ourCallBack, initialValue) {
  let acc = initialValue;
  if (!acc){
    acc = 0;
  }
  const injector = function(ele) {
    acc += ourCallBack(ele); 
  };
  this.myEach(injector);
  return acc;
}