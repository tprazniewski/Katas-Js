// const OddNumbersRecursively = (arr) => {};

function OddNumbersRecursively(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(OddNumbersRecursively(arr.slice(1)));
  //   console.log(newArr);
  return newArr;
}
console.log(OddNumbersRecursively([1, 2, 3, 4, 5, 6, 7, 8, 9]));
