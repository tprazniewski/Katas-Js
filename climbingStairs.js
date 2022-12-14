const climbingStais = (n) => {
  if (n === 1) {
    return n;
  }
  if (n === 2) {
    return n;
  }
  let curr = 0;
  let n_1 = 2;
  let n_2 = 1;
  for (let i = 3; i < n; i++) {
    curr = n_1 + n_2;
    n_2 = n_1;
    n_1 = curr;
  }

  return curr;
};

function climbingStaisRecu(num) {
  if (num < 2) {
    return num;
  } else {
    return climbingStaisRecu(num - 1) + climbingStaisRecu(num - 2);
  }
}

const climbingStaisMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = climbingStaisMemo(n - 1, memo) + climbingStaisMemo(n - 2, memo);
  return memo[n];
};
