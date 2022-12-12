function bubleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    noSwaps = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] >= arr[j + 1]) {
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
