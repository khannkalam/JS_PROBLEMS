//01 The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


const arr = [1, 2, 2, 3, 4, 4, 4];

function doubletrouble(arr) {
  let result = [];

  let prevElement = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === prevElement) {
      result.push(arr[i]);
    } else {
      result.push(arr[i]*2);
    }

     prevElement = arr[i];
  }

  return result;
}
console.log(doubletrouble(arr))