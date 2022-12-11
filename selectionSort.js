function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;
    for (j = 0 + i; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
      if (i !== lowest) {
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([44, 22, 55, 11, 20, 15, 99, 2]));
