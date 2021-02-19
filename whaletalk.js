let input = 'Hello jake, I\'m speaking to you in whale!'
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){

  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
    if (input[inputIndex] === vowels[vowelsIndex]) {
      if (input[inputIndex] === 'e'){
        resultArray.push('ee')
      } else if (input[inputIndex] === 'u') {
      resultArray.push('uu')
    } 
    else { resultArray.push(input[inputIndex]);

    }
  }
 }
}

console.log(resultArray.join("").toUpperCase());