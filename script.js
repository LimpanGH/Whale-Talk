// 1.
const input = 'When the moon hits your eye like a big pizza pie';
// console.log(input.length);

// 2.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 3.
const resultArray = [];

// 4-12
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log('i is ' + inputIndex);
    if (input[inputIndex] === 'e') {
      resultArray.push(input[inputIndex]);
    }
     if (input[inputIndex] === 'u') {
      resultArray.push(input[inputIndex]);
    }
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
   //console.log('vowelsIndex is ' + vowelsIndex);
     if(input[inputIndex] === vowels[vowelsIndex]) {
       // console.log(input[inputIndex]);
       resultArray.push(input[inputIndex]);
     }
  }
}
// console.log(resultArray);

// 13. 
const resultString = resultArray.join('').toUpperCase();

// 14.
console.log(resultString);
