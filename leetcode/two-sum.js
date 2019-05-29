// Brute force approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let sum = [];
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[j] === target - nums[i]) {
        sum.push(i, j)
      }
    }
  }
  return sum;
};
