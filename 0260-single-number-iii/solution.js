/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
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

  const result = [];
  map.forEach((value, key) => {
    if (value === 1) result.push(key);
  });

  return result;
};
// @lc code=end
