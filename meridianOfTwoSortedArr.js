const meridian = (arr1, arr2) => {
  const mergedArr = [];
  let a1 = 0;
  let a2 = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[a1] < arr2[a2] || a2 === arr2.length) {
      mergedArr.push(arr1[a1]);
      a1++;
    } else if (arr1[a1] > arr2[a2] || a1 === arr1.length) {
      mergedArr.push(arr2[a2]);
      a2++;
    } else if (arr1[a1] === arr2[a2]) {
      mergedArr.push(arr1[a1]);
      mergedArr.push(arr2[a2]);
      a1++;
      a2++;

      i++;
    }
  }
  console.log(mergedArr);
  return mergedArr.length % 2 === 0
    ? (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
        2
    : mergedArr[Math.floor(mergedArr.length / 2)];
};

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9, 10, 11, 12, 18];

// console.log(meridian(arr1, arr2));
