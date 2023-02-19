/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // Captial letters ASCII values (MIN,MAX)
    const A = 65
    const Z = 90

    return !word.split('').map(char => {
        while (A <= char.charCodeAt(0) && char.charCodeAt(0) <= Z) {
            return true
        }
        return false
    }).includes(false)
};
// @lc code=end

