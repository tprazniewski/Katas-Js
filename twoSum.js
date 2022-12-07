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

const arr = [1, 4, 6, 7, 9];
const target = 16;
