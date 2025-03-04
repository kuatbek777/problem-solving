/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lowercaseLetters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  for (let i = 0; i < lowercaseLetters.length; i++) {
    if (
      (s.match(new RegExp(lowercaseLetters[i], "g")) || []).length !==
      (t.match(new RegExp(lowercaseLetters[i], "g")) || []).length
    ) {
      return false;
    }
  }
  return true;
};
