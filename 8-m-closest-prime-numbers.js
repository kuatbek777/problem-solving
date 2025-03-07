/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

var closestPrimes = function (left, right) {
  let num1;
  let num2;

  let previousPrimeNum;
  let currentPrimeNum;

  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      previousPrimeNum = currentPrimeNum;
      currentPrimeNum = i;

      if (previousPrimeNum && currentPrimeNum) {
        if (
          !num2 ||
          !num1 ||
          num2 - num1 > currentPrimeNum - previousPrimeNum
        ) {
          num2 = currentPrimeNum;
          num1 = previousPrimeNum;

          if (num2 - num1 === 1) {
            break;
          }
        }
      }
    }
  }

  return num1 && num2 ? [num1, num2] : [-1, -1];
};
