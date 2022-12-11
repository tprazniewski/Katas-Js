function addUp(n) {
  total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

// n time complexity
console.log("first", addUp(100000000));

const addUp2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.log("second", addUp2(100000000));
