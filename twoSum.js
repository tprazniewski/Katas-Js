/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let add = 0;
    for (let j = 0 + add; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [nums[i], nums[j]];
    }
    add++;
  }
};

const twoSumIndicates = function (nums, target) {
  let arr = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0 + arr; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
    arr++;
  }
};
