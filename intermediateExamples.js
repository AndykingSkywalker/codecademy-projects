// factorial example
const factorial = int => {
   let sum = 1;
   while (int){
     sum *= int;
     int--;
   } return sum;
}

// subLength example
const subLength = (string, char) => {
  let subArray = [];
    for (let i=0; i < string.length; i++){
      if (string[i] === char) subArray.push(i);
    } return subArray.length === 2 ? subArray[1] - subArray[0] + 1 : 0;
}

// groceries example

const groceries = arr => {
  if (arr.length > 1) {
    let newArr = [];
    arr.forEach((element) => newArr.push(element.item));
    const lastElement = newArr.pop();
    return `${newArr.join(', ')} and ${lastElement}`;
  } else return arr[0].item;
}