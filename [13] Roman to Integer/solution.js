/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "I":
        number += 1;
        break;
      case "V":
        number += 5;
        break;
      case "X":
        number += 10;
        break;
      case "L":
        number += 50;
        break;
      case "C":
        number += 100;
        break;
      case "D":
        number += 500;
        break;
      case "M":
        number += 1000;
        break;
    }
  }

  return number;
};
// @lc code=end
