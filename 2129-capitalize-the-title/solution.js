/*
 * @lc app=leetcode id=2129 lang=javascript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title.split(" ").map((word) => {
    word = word.toLowerCase()
    if (word.length >= 1 && word.length <= 2) return word
  })
}
// @lc code=end
