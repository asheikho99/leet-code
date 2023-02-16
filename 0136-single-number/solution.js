/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  
  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  });

  let result;
  map.forEach((value, key) => {
    if (value === 1) {
      result = key;
    }
  });

  return result;
};
// @lc code=end
