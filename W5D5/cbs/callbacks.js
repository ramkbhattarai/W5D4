class Clock {
  constructor() {
    const date = new Date() //2019-07-12T16:06:29.036Z
    this.hours = date.getHours() //2019-07-12T16:06:29.036Z
    this.minutes = date.getMinutes() //2019-07-12T16:06:29.036Z
    this.seconds = date.getSeconds() //2019-07-12T16:06:29.036Z
    this.printTime();
    
    setInterval(this._tick.bind(this), 1000)
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
  }

  printTime() {

    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    return
  }

  _tick() {
    
    this.seconds++
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours ++;
        if (this.hours === 24) {
          this.hours = 0;

        }
      }
    }
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

// const clock = new Clock();
// clock._tick();

const readline = require('readline');
// Create the interface from the module
// this will allow us to receive user input
// via the terminal
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  reader.question('Pick a number.', answer => {
   
    let elem = parseInt(answer)    
    sum = sum + elem;
    numsLeft = numsLeft - 1;
    if (numsLeft === 0) {
      completionCallback(sum)
      reader.close();
      return;
    } else {
      console.log((`Current sum: ${sum}`));
    }
    addNumbers(sum, numsLeft, completionCallback)
  });
}
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// // Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, answer => {
    if (answer === "yes") {
      callback(true);
    } 
    if (answer === "no") {
      callback(false);
  }
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
});
}
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    // console.log("on to outerloop")
    ////
  }
  else {
    askIfGreaterThan(arr[i], arr[i + 1], function(bool) {
      if (bool) {
        arr[i+1] = [arr[i], arr[i] = arr[i+1]][0];
        innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop)
      }
      else {
        innerBubbleSortLoop(arr, i + 1, false, outerBubbleSortLoop)
      }
    }.bind(this))
    
  }
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true)
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// innerBubbleSortLoop([4, 9, 6, 1, 4, 2], 0, false, outerBubbleSortLoop)

Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context)
  }
}

class Lamp {
  constructor() {
    this.name = "a lamp"; 
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp