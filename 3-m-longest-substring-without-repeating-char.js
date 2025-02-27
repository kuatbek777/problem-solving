/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let substring = "";
  for (const letter of s) {
    const index = substring.indexOf(letter);
    substring += letter;
    if (index >= 0) {
      const currentLength = substring.length - 1;
      if (currentLength > result) {
        result = currentLength;
      }

      substring = substring.slice(index + 1);
    }
  }

  return Math.max(substring.length, result);
};
