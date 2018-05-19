
const readline = require('readline');


const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});




function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, i = 0 , madeAnySwaps=false, outerBubbleSortLoop );
    }
    else {
      sortCompletionCallback(arr);
    }
  }
    outerBubbleSortLoop(true);
};


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps);
  }
  else{
    el1 = arr[i]
    el2 = arr[i+1]
    askIfGreaterThan(el1, el2, function(bigger){
      console.log(i);
      if (bigger){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      madeAnySwaps = true;
      i++;
      innerBubbleSortLoop(arr, i,madeAnySwaps, outerBubbleSortLoop);
      }
      else{
      i++;
      innerBubbleSortLoop(arr, i,madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }
}

function askIfGreaterThan(el1, el2, callback){
const quest = `Is ${el1} is bigger than ${el2}?`;

reader.question(quest, function (answer) {
  if (answer === "yes"){
    callback(true);
  }
  else {
    callback(false);
  }
   });
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
