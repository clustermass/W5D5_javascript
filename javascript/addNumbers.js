const readline = require('readline');


const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, callback) {
  if (numsLeft === 0) {
    callback(sum);
  } else {
    reader.question("Enter next number", function (answer) {
    sum += parseInt(answer);
    addNumbers(sum, (numsLeft - 1), callback);
    });
  }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
