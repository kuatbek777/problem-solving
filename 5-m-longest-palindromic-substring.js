const isPolindrome = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (i >= (s.length - 1) / 2) {
      return true;
    }
    if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestSubstring = "";
  let windowLength = 0;
  for (let i = 0; i < s.length - windowLength; i++) {
    windowLength = longestSubstring.length + 1;

    let leftIndex = i;
    let rightIndex = i + windowLength;
    let substring = s.slice(leftIndex, rightIndex);
    while (isPolindrome(substring)) {
      longestSubstring = substring;
      if (leftIndex === 0 || rightIndex === s.length) {
        break;
      } else {
        leftIndex--;
        rightIndex++;
        substring = s.slice(leftIndex, rightIndex);
      }
    }
  }
  return longestSubstring;
};
