const rec = (n) => {
  //base case || its necessary to have end statement
  if (n === 1) {
    return n;
  }
  return n + rec(n - 1);
};

console.log(rec(4));
