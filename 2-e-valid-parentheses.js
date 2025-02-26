/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openBracketsStack = [];
  const openBrackets = ["{", "(", "["];
  for (let bracket of s) {
    if (openBrackets.includes(bracket)) {
      openBracketsStack.push(bracket);
    } else {
      const lastBracket = openBracketsStack.pop();
      if (
        (bracket === ")" && lastBracket !== "(") ||
        (bracket === "}" && lastBracket !== "{") ||
        (bracket === "]" && lastBracket !== "[")
      ) {
        return false;
      }
    }
  }

  if (openBracketsStack.length > 0) {
    return false;
  }

  return true;
};
