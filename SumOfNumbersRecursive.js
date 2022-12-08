const rec = (n) => {
  if (n === 1) {
    return n;
  }
  return n + rec(n - 1);
};

// console.log(rec(4));
